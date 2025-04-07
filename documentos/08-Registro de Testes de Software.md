# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/Grupo-13--Lixo-eletronico/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Projeto de Interface</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/Grupo-13--Lixo-eletronico/blob/main/documentos/04-Projeto%20de%20Interface.md"> Plano de Testes de Software</a>


<p>Os testes funcionais realizados na aplicação web são descritos a seguir.</p>
<br>
<ol>
  <li> CT-01: Verificar o funcionamento das funcionalidades da página Home.</li>
  <br>
   <p>Responsável: André.</p>
    <p>RF01: A aplicação deve permitir que o usuário forneça a localização atual</P>
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/Grupo-13--Lixo-eletronico/blob/main/documentos/img/popup1.png">
  <p>Assim que o usuário entrar na página home, um pop up será exibido solicitando permissão de acesso à geolocalização:</P>
<br>
  
  <li> CT-02: Verificar o funcionamento das funcionalidades da página Home.</li>
  <br>
   <p>Responsável: André.</p>
    <p>RF03: A aplicação deve fornecer uma lista de endereços que recebem descartes para o usuário</P>
  <img src="https://github.com/user-attachments/assets/fed03b7f-5374-4afc-8223-1834a97d6aed">
  <p>Além de poder pesquisar pontos de coleta a aplicação fornece alguns endereços que recebem descartes para o usuário consultar.</p>
  <br>
  
  <li> CT-03: Verificar o funcionamento das funcionalidades da página Home.</li>
  <br>
   <p>Responsável: Amanda</p>
    <p>RF05: A aplicação deve exibir um ícone para cada equipamento descartado </P>
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/Grupo-13--Lixo-eletronico/blob/main/documentos/img/Info5.png">
  <p>Para cada equipamento cadastrado, será exibido um ícone ao lado.</p>
  <br>
  
  <li> CT-04: Verificar o funcionamento das funcionalidades da página Home.</li>
  <br>
   <p>Responsável: Amanda</p>
    <p>RF07: A aplicação deve permitir o usuário selecionar um endereço e ter informações sobre o local, tais como horário de funcionamento, equipamentos aceitos, informações de contato e se realiza coleta</P>
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/Grupo-13--Lixo-eletronico/blob/main/documentos/img/mapa7.png">
  <p>Para verificar a funcionalidade, basta encontrar um ponto de coleta de novo e clicá-lo.</p>
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/Grupo-13--Lixo-eletronico/blob/main/documentos/img/card7.png">
  <p>Após clicar no ponto, podemos consultar todas as informações do local</p>
<br>
  
  <li><strong> CT-05</strong>: Validar funcionamento do filtro de endereço. </li>
  <br>
   <p><strong>Responsável</strong>: Guilherme.</p>
    <p>RF06: A aplicação deve ter uma opção de filtrar os endereços em função do horário de funcionamento</P>
  <img src="https://github.com/user-attachments/assets/5378a977-8003-4d80-a1c7-601a22f780f7">
  <p>Para verificar a funcionalidade, basta informar no campo um horário de funcionamento.</p>
<br>

  <li><strong> CT-06</strong>: Validar funcionamento do filtro de endereço. </li>
  <br>
   <p><strong>Responsável</strong>: Guilherme.</p>
    <p>RF04: A aplicação deve ter uma opção de filtrar os endereços em função do equipamento a ser descartado.</p>
  <img src="https://github.com/user-attachments/assets/3e7bacc8-d746-44c0-a6e4-5f539c6829c9">
  <p>Para verificar a funcionalidade, basta informar no campo um endereço próximo.</p>
<br>

  <li><strong> CT-07</strong>: Validar o funcionamento dos pontos de coleta próximos a um endereço pesquisado na aplicação</li>
  <br>
   <p><strong>Responsável</strong>: Amanda</p>
    <p>RF02: A aplicação deve permitir que o usuário forneça seu endereço manualmente para que os pontos de coleta próximos a ele sejam fornecidos</p>
    <p>Para verificar a funcionalidade foi informado um endereço no campo de pesquisa e validado que aparecem pontos de coleta próximos a ele.</p>
  <img src="https://github.com/user-attachments/assets/c31c0f7c-c4a4-45a2-9608-e2c2ecb9469b">
  <p>Digitando um endereço no campo de pesquisa.</p>
  <img src="https://github.com/user-attachments/assets/7be509bb-4ff2-4b61-81b3-3d425ef24837">
  <p>Verificando que apareceram pontos de coleta próximos a ele.</p>
  <br>
  
  <li><strong> CT-08</strong>: Verificar o funcionamento do compartilhamento de um local de coleta</li>
  <br>
   <p><strong>Responsável</strong>: Amanda</p>
    <p>RF10:A aplicação deve permitir o usuário compartilhar o link com o local de coleta</p>
    <p>Para verificar a funcionalidade foi clicado em um ponto de coleta do mapa e clicado em compartilhar link pelo whatsapp.</p>
  <img src="https://github.com/user-attachments/assets/daff646f-18b1-4e9d-8abf-7a9efea29afb">
  <p>Abrindo um ponto de coleta e clicando em compartilhar link pelo whatsapp.</p>
  <img src="https://github.com/user-attachments/assets/e920defb-3a10-4b3b-b07d-cca25e0f9cb2">
  <p>Verificando que foi aberto uma janela direcionando para o whatsapp para compartilhar o local de coleta selecionado com informações sobre a localização.</p>
  <br>
  
  <li><strong> CT-09</strong>: Validar funcionamento da pagina Informacoes Adicionais</li>
  <br>
   <p><strong>Responsável</strong>: Nathalia</p>
    <p>RF-08 A aplicação deve ter uma página dedicada a conscientização dos usuários com relação aos impactos e riscos provocados pelo descarte incorreto dos equipamentos eletrônicos.</p>
    <p>Precisa apresentar as informacoes seguindo o figma</p>
  <img src="https://github.com/user-attachments/assets/1c47aa76-c3f4-45a9-8e6e-1129c68a765d">
  <br>
  
  <li><strong> CT-10</strong>:  Validar funcionamento do perfil </li>
  <br>
   <p><strong>Responsável</strong>: Nathalia</p>
    <p>RF-09 A aplicação deve permitir o usuário editar e alterar as informações do seu perfil</p>
    <p>Fazer um cadastro e modificar a informacao</p>
  <img  src="https://github.com/user-attachments/assets/cfdec07d-1dfb-4d96-a61e-cf8705ec9244">

  <p>Verificar se a modificacao foi salva</p>
<img src="https://github.com/user-attachments/assets/16e91a60-5d63-4157-b500-7b06ec399abe">
</ol>
