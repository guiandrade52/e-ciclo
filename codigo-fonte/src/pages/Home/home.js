require('dotenv').config();

const pesquisar = document.getElementById("pesquisar");
const listaEnderecos = document.getElementById("lista-end");
const inputFilter = document.getElementById("input-filter");

const api_key_google_maps = process.env.API_KEY_GOOGLE_MAPS;

// Função para buscar endereços na API do Google Maps
const buscarEnderecos = async (query) => {
    if (!api_key_google_maps) {
        console.error("Chave da API do Google Maps não definida. Verifique o arquivo .env.");
        return [];
    }

    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${api_key_google_maps}`
        );

        if (!response.ok) {
            console.error(`Erro ao buscar endereços: ${response.status}`);
            return [];
        }

        const data = await response.json();

        if (data.status !== "OK") {
            console.warn(`API do Google Maps retornou status: ${data.status}`);
            return []; // ou tratar outros status como ZERO_RESULTS, etc.
        }

        return data.predictions;
    } catch (error) {
        console.error("Erro ao buscar endereços:", error);
        return [];
    }
};

const autoCompleteConfig = {
    searchEngine: "loose",
    threshold: 0,
    placeHolder: "Digite seu endereço...",
    data: {
        src: buscarEnderecos,
        keys: ["description"],
    },
    resultsList: {
        element: (list, data) => {
            if (!data.results.length) {
                const message = document.createElement("div");
                message.setAttribute("class", "no_result");
                message.innerHTML = `Nenhum resultado encontrado para "${data.query}"`;
                list.prepend(message);
            }
        },
        noResults: true,
    },
    resultItem: {
        element: (item, data) => {
            item.style = "display: flex; justify-content: space-between;";
            item.innerHTML = `
              <span style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
                ${data.match}
              </span>
              <span style="display: flex; align-items: center; font-size: 13px; font-weight: 100; text-transform: uppercase; color: rgba(0,0,0,.2);">
                ${data.value}
              </span>`;
        },
        highlight: true,
    },
    events: {
        input: {
            focus: () => {
                if (autoCompleteEndereco.isOpen) autoCompleteEndereco.start();
            },
        },
    },
};

const autoCompleteEndereco = new autoComplete(autoCompleteConfig);
