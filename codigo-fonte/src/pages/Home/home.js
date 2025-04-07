/* Importações de arquivos */
import { pontosColeta } from "../../utils/mock_guilherme.js";

/* Elementos da página */
// TODO: Revisar depois para remover alguns lixos
const enderecoAtual = document.getElementById("endereco-atual");
const logout = document.getElementById("logout");
const pesquisar = document.getElementById("pesquisar");
const listaEnderecos = document.getElementById("lista-end");
const inputFilter = document.getElementById("input-filter");

/* Defina chaves de API, se houver, aqui.  Ideal colocar dentro de um arquivo .env */
const api_key_google_maps = "AIzaSyDC9_VuMSKpJk6D54xqonyKAP1XmmGwouk";

const autoCompleteEndereco = new autoComplete({
  searchEngine: "loose",
  threshold: 0,
  selector: "#endereco-atual",
  placeHolder: "Buscar Endereço",
  data: {
    src: async (query) => {
      try {
        const ret = await buscadorDeLocais(query);
        return ret.map((x) => x.display_name);
      } catch (error) {
        return error;
      }
    },
    cache: false,
  },
  resultItem: {
    highlight: false,
  },
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        autoCompleteEndereco.input.value = selection;
      },
    },
  },
});

const useState = (defaultValue) => {
  let value = defaultValue;
  const getValue = () => value;
  const setValue = (newValue) => (value = newValue);
  return [getValue, setValue];
};

// Declaração de estados
const [latitude, setLatitude] = useState();
const [longitude, setLongitude] = useState();
const [inputEndereco, setInputEndereco] = useState();
const [getMapa, setMapa] = useState();
const [getAquiMarker, setAquiMarker] = useState();

// Listeners:
// monitora se o botão de pesquisa foi clicado e previne o comportamento padrão
pesquisar.addEventListener("click", (e) => {
  e.preventDefault();

  // Verifica se o usuário preencheu o campo antes de pesquisar
  if (enderecoAtual.value.length === 0) {
    console.log("Gentileza preencher o campo");
    // TODO: Adicionar toaster informando que o usuário deve preencher o campo de pesquisa
    return;
  }

  // Exibe um spinner ao clicar em pesquisar
  pesquisar.innerHTML = `
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        <span class="visually-hidden">Loading...</span>`;

  setInputEndereco(enderecoAtual.value);

  buscadorDeLocais(enderecoAtual.value)
    .then((result) => {
      pesquisar.innerHTML = "Pesquisar";

      if (result.length === 0) {
        console.log("Nao encontrado");
      } else {
        const mapa = getMapa();
        mapa.setView([result[0].lat, result[0].lon], 14);
        inicializaAquiMarker(result[0].lat, result[0].lon, false);
        setLatitude(result[0].lat);
        setLongitude(result[0].lon);
        enderecosAtualizar();
      }
    })
    .catch(() => {
      pesquisar.innerHTML = "Pesquisar";
    });
});

const buscaFiltroMapa = (lat, long) => {
  setLatitude(lat);
  setLongitude(long);

  inicializaAquiMarker(latitude(), longitude(), true);
};

const filtraDados = (e) => {
  const inputData = e.target.value.toUpperCase();

  const mapear = pontosColeta.filter((data) => {
    const listar = document.getElementById("lista-end");

    // Verifica se o input tem dados
    if (inputData.length === 0) {
      console.log("input sem dados");
      return;
    }

    if (
      data.nome.toUpperCase().includes(inputData) ||
      data.horarioAtendimento.toUpperCase().includes(inputData)
    ) {
      buscaFiltroMapa(data.latitude, data.longitude);

      console.log("Deu bom");
    } else {
      console.log("Não deu");
    }
  });
};

// Escuta o evento de entrada no input
inputFilter.addEventListener("keyup", filtraDados);

const enderecosAtualizar = () => {
  let lista = pontosColeta.map((obj) => ({
    ...obj,
    distancia: calculoDistancia(
      latitude(),
      longitude(),
      obj.latitude,
      obj.longitude
    ),
  }));

  lista.sort((a, b) => a.distancia - b.distancia);

  listaEnderecos.innerHTML = "";
  for (const itemLista of lista.slice(0, 3)) {
    listaEnderecos.innerHTML += `
      <div class="card-enderecos">
        <div class="card-body">
          <p class="fw-bold">${itemLista.nome}</p>
          <p>${itemLista.numero}, ${itemLista.endereço} - ${itemLista.bairro}, ${itemLista.cidade}</p>
          <p><strong>Distância</strong>: ${Math.round(
            itemLista.distancia
          )} km</p>
          <p><strong>Horário</strong>: ${itemLista.horarioAtendimento}</p>
        </div>
      </div>
    `;
  }
};

// https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates
const calculoDistancia = (lat1, lon1, lat2, lon2) => {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
};

const deg2rad = (deg) => {
  return deg * (Math.PI / 180);
};

// Solicita permissão para buscar a localização do usuário
const solicitaAcessoLocalizacao = () => {
  navigator.permissions.query({ name: "geolocation" }).then((result) => {
    if (result.state === "granted" || result.state === "prompt") {
      navigator.geolocation.getCurrentPosition(
        (posicao) => {
          console.log("Permissão concedida");
          console.log(
            `Latitude: ${posicao.coords.latitude} / Longitude: ${posicao.coords.longitude}`
          );

          setLatitude(posicao.coords.latitude);
          setLongitude(posicao.coords.longitude);
          inicializaMapa(latitude(), longitude());
          inicializaAquiMarker(latitude(), longitude(), true);
          enderecosAtualizar();
        },
        (err) => {
          setLatitude(-19.9189965);
          setLongitude(-43.9412044);
          inicializaMapa(latitude(), longitude());
          enderecosAtualizar();
        }
      );
    } else if (result.state === "denied") {
      setLatitude(-19.9189965);
      setLongitude(-43.9412044);
      inicializaMapa(latitude(), longitude());
      enderecosAtualizar();
    }
  });
};

/* Manter comentado para não gerar requests desnecessários */
const buscaDadosEndereco = async (LocalLat, localLong) => {
  const urlMaps = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${LocalLat},${localLong}&key=${api_key_google_maps}`;
  try {
    const response = await fetch(urlMaps);

    if (!response.ok) {
      throw new Error(`Status da resposta: ${response.status}`);
    }
    const json = await response.json();

    // TODO: revisar essa parte
    if (!json.results[0]) {
      return (enderecoAtual.value =
        "Endereço não encontrado, insira manualmente");
    }

    const { formatted_address } = json.results[0];
    enderecoAtual.value = formatted_address;
  } catch (error) {
    console.error(error.message);
  }
};

const buscadorDeLocais = async (endereco) => {
  const urlMaps = `https://nominatim.openstreetmap.org/search.php?q=${endereco}&countrycodes=br&format=jsonv2&addressdetails=1&accept-language=pt-BR`;
  const response = await fetch(urlMaps);

  if (!response.ok) {
    throw new Error(`Status da resposta: ${response.status}`);
  }
  const json = await response.json();
  return json;
};

const inicializaAquiMarker = (latitude, longitude, popup) => {
  if (getAquiMarker() === undefined) {
    // Cria um ponteiro customizado para representar localização atual
    let iconeLocalAtual = L.icon({
      iconUrl: "../../assets/pointer.png",
      iconSize: [38, 55],
      shadowSize: [50, 64],
      iconAnchor: [19, 55],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76],
    });

    // Adiciona localização atual do usuário no mapa
    let localizacaoAtual = L.marker([latitude, longitude], {
      icon: iconeLocalAtual,
    }).addTo(getMapa());
    setAquiMarker(localizacaoAtual);
  } else {
    getAquiMarker().setLatLng([latitude, longitude]);
  }

  if (popup) {
    getAquiMarker().bindPopup("<b>Você está aqui!</b><br>").openPopup();
  } else {
    getAquiMarker().closePopup();
    getAquiMarker().unbindPopup();
  }
};

const inicializaMapa = (latitude, longitude) => {
  buscaDadosEndereco(latitude, longitude);

  // Instancia o mapa na div home
  let mapa = L.map("mapa").setView([latitude, longitude], 14);
  setMapa(mapa);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(mapa);

  // Realizar iteração para exibir os pontos de coleta próximos
  let pontos = pontosColeta.map((item) => {
    return {
      informacaoEndereco: L.marker([item.latitude, item.longitude]).addTo(mapa),
      informacoesAdicionais: {
        imagem: item.img,
        nomeLocal: item.nome,
        contato: item.contato,
        endereço: item.endereço,
        numero: item.numero,
        bairro: item.bairro,
        cidade: item.cidade,
        horarioFuncionamento: item.horarioAtendimento,
      },
      equipamentosDescartados: {
        equipamentos: item.equipamentosDescartados.map(
          (equipamentos) => equipamentos.nome
        ),
        info: item.equipamentosDescartados.map((informacoes) =>
          informacoes.informacoesEquipamentos.substring(0, 50)
        ),
        icone: item.equipamentosDescartados.map((icones) => icones.icone),
      },
    };
  });

  let popup = L.popup();

  pontos.map((item) => {
    item.informacaoEndereco.bindPopup(
      `
      <img
        src="${item.informacoesAdicionais.imagem.path}"
        class="img-fluid rounded mx-auto d-block"
        width="${item.informacoesAdicionais.imagem.width}"
        height="${item.informacoesAdicionais.imagem.height}"
        alt="${item.informacoesAdicionais.imagem.alt}"
      /> 
      <p class="endereco-style" class="text-center h5"><strong>${item.informacoesAdicionais.endereço}, ${item.informacoesAdicionais.numero} - ${item.informacoesAdicionais.bairro}   <i class="bi bi-telephone-fill"></i> </strong></p>
      <p id="opcoes-descarte">O que posso descartar nesse local?</p>
      <div id="tipo-descarte-endereco">

      <li class="lista-equipamentos">${item.equipamentosDescartados.equipamentos[0]}</li> 
        <div id="icone-equipamentos">
          <div class="hover-text">
            <i class="${item.equipamentosDescartados.icone[0]}"></i>
              <span class="tooltip-text" id="top">${item.equipamentosDescartados.info[0]}...<br/> <a href="../InformacoesAdicionais/informacoesAdicionais.html">Saiba mais</a></span>
          </div>
        </div>

        <li class="lista-equipamentos">${item.equipamentosDescartados.equipamentos[1]}</li> 
          <div id="icone-equipamentos">
            <div class="hover-text">
              <i class="${item.equipamentosDescartados.icone[1]}"></i>
                <span class="tooltip-text" id="top">${item.equipamentosDescartados.info[1]}...<br/> <a href="../InformacoesAdicionais/informacoesAdicionais.html">Saiba mais</a></span>
            </div>
         </div>

        <li class="lista-equipamentos">${item.equipamentosDescartados.equipamentos[2]}</li> 
          <div id="icone-equipamentos">
              <div class="hover-text">
                <i class="${item.equipamentosDescartados.icone[2]}"></i>
                  <span class="tooltip-text" id="top">${item.equipamentosDescartados.info[2]}...<br/> <a href="../InformacoesAdicionais/informacoesAdicionais.html">Saiba mais</a></span>
              </div>
            </div>
          </div>
 
        <div id="accordion">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Contato
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordion">
              <div class="accordion-body ">
                <span><strong>Horário</strong>: ${item.informacoesAdicionais.horarioFuncionamento}</span><br />
                <span><strong>Nome</strong>: ${item.informacoesAdicionais.contato.nome}</span><br />
                <span><strong>Telefone</strong>: ${item.informacoesAdicionais.contato.telefone}</span><br />
                <span><strong>Celular</strong>: ${item.informacoesAdicionais.contato.celular}</span>
              </div>
            </div>
          </div>
        </div>

      </script>
      <p class="endereco-style" class="text-center h5"><strong>Compartilhar localização</strong></p>
      <div class="social-media-icons">
        <a href="https://api.whatsapp.com/send?text=Local%20de%20coleta%20de%20lixo%20eletronico%20em%20${encodeURIComponent(item.informacoesAdicionais.endereço)}%2C%20${encodeURIComponent(item.informacoesAdicionais.numero)}%20-%20${encodeURIComponent(item.informacoesAdicionais.bairro)}%0A${encodeURIComponent('https://www.google.com/maps?q=' + item.informacaoEndereco.getLatLng().lat + ',' + item.informacaoEndereco.getLatLng().lng)}" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
        </a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.google.com/maps?q=' + item.informacaoEndereco.getLatLng().lat + ',' + item.informacaoEndereco.getLatLng().lng)}" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
            </svg>
        </a>
      </div>
      `
    );
  });
};

let url = "../Perfil/perfil.html";
const profile = document.getElementById("profile");

function checkUser() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    profile.innerText = "Login";
    url = "../Login/login.html";
  }
}

profile.addEventListener('click', () => {
  window.location.href = url;
});

logout.addEventListener('click', () => {
  localStorage.removeItem("user");
  setTimeout(() => {
    window.location.href = "../Login/login.html";
}, 1000)
})

// Inicializa todas as funções
const start = async (e) => {
  solicitaAcessoLocalizacao();
};

// Verifica se a janela está carregada e inicializa o javascript.
window.addEventListener("load", (e) => {
  console.log("Javascript up!");

  start(e);
  checkUser();
});
