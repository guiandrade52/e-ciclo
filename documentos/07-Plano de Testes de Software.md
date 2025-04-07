# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/Grupo-13--Lixo-eletronico/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/Grupo-13--Lixo-eletronico/blob/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento das funcionalidades da página home</td>
  <td>
   <ul>
    <li>RF01: A aplicação deve permitir que o usuário forneça a localização atual</li>

   </ul>
  </td>
  <td>Verificar se à pagina está solicitando a localização em tempo real do usuáro</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Verificar solicitação do pop-up de localização.</li>
    <li>Aceitar compartilhar localização</li>
     <li>Carregar o mapa</li>
   </ol>
   </td>
  <td>A paginá home deve exibir o mapa</td>
  <td>André</td>
 </tr>

 <tr>
  <td>CT-02: Verificar o funcionamento das funcionalidades da página home</td>
  <td>
   <ul>
    <li>RF03:A aplicação deve fornecer uma lista de endereços que recebem descartes para o usuário</li>

   </ul>
  </td>
  <td>Verificar se à pagina home está exibindo os pontos de coleta no mapa</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Aceitar compartilhar localização</li>
     <li>Exibir o mapa com todos pontos de coletas disponiveis</li>
   </ol>
   </td>
  <td>A paginá home deve exibir o mapa com as localizações dos pontos de coleta</td>
  <td>André</td>
 </tr>

 <tr>
  <td>CT-03: Verificar o funcionamento das funcionalidades da página home</td>
  <td>
   <ul>
    <li>RF05: A aplicação deve exibir um ícone para cada equipamento descartado</li>

   </ul>
  </td>
  <td>Verificar exibição dos icones no card sobre as informações dos itens a serem descartados naquele local</td>
  <td>
   <ol>
    <li>Clicar em um ponto de coleta no mapa</li>
    <li>Verificar informações sobre os itens a serem descartados naquele local</li>
    <li>Para cada equipamento cadastrado, será exibido um ícone ao lado.</li>
   </ol>
   </td>
  <td>A paginá home deve exibir um card com os icones dos itens a serem descartados naquele ponto de coleta</td>
  <td>Amanda</td>
 </tr>

 <td>CT-04: Verificar o funcionamento das funcionalidades da página home</td>
  <td>
   <ul>
    <li>RF07: A aplicação deve permitir o usuário selecionar um endereço e ter informações sobre o local, tais como horário de funcionamento, equipamentos aceitos, informações de contato e se realiza coleta</li>

   </ul>
  </td>
  <td>Verificar exibição do modal com todas as informações sobre os pontos de coleta</td>
  <td>
   <ol>
    <li>Clicar em um ponto de coleta do mapa</li>
    <li>Verificar o card com todas as informações sobre o local de coleta</li>
   </ol>
   </td>
  <td>A paginá home deve exibir um card com as informações do ponto de coleta</td>
  <td>Amanda</td>
 </tr>

 <td>CT-05: Validar funcionamento do filtro</td>
  <td>
   <ul>
    <li>RF06: A aplicação deve ter uma opção de filtrar os endereços em função do horário de funcionamento</li>
   </ul>
  </td>
  <td>Validar se o input está filtrando corretamente por horário de funcionamento</td>
  <td>
   <ol>
    <li>Digitar no campo um horário, ex: 08:00</li>
    <li>Verificar no mapa se o ponteiro vermelho movimentou para a posição correta</li>
   </ol>
   </td>
  <td>Precisa exibir um ponteiro no mapa, como indica a informação filtrada</td>
  <td>Guilherme</td>
 </tr>

 <td>CT-06: Validar funcionamento do filtro</td>
  <td>
   <ul>
    <li>RF04: A aplicação deve ter uma opção de filtrar os endereços em função do equipamento a ser descartado.
   </ul>
  </td>
  <td>Validar se o input está filtrando corretamente por endereços.</td>
  <td>
   <ol>
    <li>Digitar no campo um horário, ex: Ferro velho</li>
    <li>Verificar no mapa se o ponteiro vermelho movimentou para a posição correta</li>
   </ol>
   </td>
  <td>Precisa exibir um ponteiro no mapa, como indica a informação filtrada</td>
  <td>Guilherme</td>
 </tr>

 <tr>
  <td>CT-07: Validar o funcionamento dos pontos de coleta próximos a um endereço pesquisado na aplicação</td>
  <td>
   <ul>
    <li>RF02: A aplicação deve permitir que o usuário forneça seu endereço manualmente para que os pontos de coleta próximos a ele sejam fornecidos</li>
   </ul>
  </td>
  <td>Verificar se ao digitar o endereço manualmente aparecem pontos de coleta próximos a ele para o usuário consultar</td>
  <td>
   <ol>
    <li>Acessar a página home.</li>
    <li>Digitar o endereço na barra de pesquisa</li>
    <li>Clicar no botão pesquisar</li>
    <li>Verificar no mapa se apareceram pontos de coleta próximos ao endereço digitado</li>
   </ol>
   </td>
  <td>O mapa deve exibir pontos de coleta próximos ao endereço pesquisado</td>
  <td>Amanda</td>
 </tr>

  <tr>
  <td>CT-08: Verificar o funcionamento do compartilhamento de um local de coleta</td>
  <td>
   <ul>
    <li>RF10: A aplicação deve permitir o usuário compartilhar o link com o local de coleta</li>
   </ul>
  </td>
  <td>Verificar se é possível compartilhar o link com o local de coleta</td>
  <td>
   <ol>
    <li>Acessar a página home</li>
    <li>Clicar em um ponto de coleta mostrado no map</li>
    <li>Clicar no ícone de whatsapp para compartilhar aquele local de coleta por esse canal de envio</li>
    <li>Verificar se foi aberta uma página direcionando para o whatsapp com as informações do local de coleta selecionado</li>
   </ol>
   </td>
  <td>Deve ser possível compartilhar o endereço do local de coleta</td>
  <td>Amanda</td>
 </tr>
 </tr>

 <td>CT-09: Validar funcionamento da pagina Informacoes Adicionais</td>
  <td>
   <ul>
    <li> RF-08	A aplicação deve ter uma página dedicada a conscientização dos usuários com relação aos impactos e riscos provocados pelo descarte incorreto dos equipamentos eletrônicos.
   </ul>
  </td>
  <td>Validar se as informacoes sao exibidas corretamente.</td>
  <td>
   <ol>
    <li>Ir ate a pagina e verficar as informaçoes</li>
   </ol>
   </td>
  <td>Precisa apresentar as informacoes seguindo o figma</td>
  <td>Nathalia</td>
 </tr>
 </tr>

 <td>CT-10: Validar funcionamento do perfil</td>
  <td>
   <ul>
    <li> RF-09	A aplicação deve permitir o usuário editar e alterar as informações do seu perfil
   </ul>
  </td>
  <td>Validar se o input está sendo chamado e salvo.</td>
  <td>
   <ol>
    <li>Fazer um cadastro e modificar a informacao</li>
    <li>Verificar se a modificacao foi salva</li>
   </ol>
   </td>
  <td>Precisa alterar e salvar informacoes de usuarios</td>
  <td>Nathalia</td>
 </tr>

</table>
