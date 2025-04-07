# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<!-- Perfil 1 -->
<tr align=center>
<th colspan="2">Perfil 01: Consumidores de eletrônicos </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Indivíduos que compram e utilizam dispositivos eletrônicos como 
smartphones, computadores, tablets e televisores</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
<li>1. Instruções claras e acessíveis sobre como realizar o descarte de 
aparelhos eletrônicos da forma correta
</li>
<li>2. Informações sobre os locais de pontos de coleta e centros que 
realizam a reciclagem dos aparelhos
</li>
<li>3. Conhecimento sobre o impacto ambiental e de saúde pública 
causado pelo descarte inadequado
</li>
</td>
</tr>
<!-- Perfil 2 -->
<tr align=center>
<th colspan="2">Perfil 02: Técnicos de reparação</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Profissionais e empresas que realizam consertos e manutenção de 
equipamentos eletrônicos.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
<li>1. Instruções e procedimentos para o descarte adequado de peças 
e dispositivos não reparáveis
</li>
<li>2. Informações sobre os locais de pontos de coleta e centros que 
realizam a reciclagem dos aparelhos
</li>
<li>3. Conhecimento sobre o impacto ambiental e de saúde pública 
causado pelo descarte inadequado
</li>
</td>
</tr>

<!-- Perfil 3 -->
<tr align=center>
<th colspan="2">Perfil 03: Fabricantes e vendedores de eletrônicos</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Empresas que produzem e vendem dispositivos eletrônicos.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
<li>1. Conhecimento sobre o impacto ambiental e informações de 
descarte para que possam desenvolver programas de incentivo 
ao descarte e reciclagem de produtos ao fim da vida útil

</li>
<li>2. Implementação de práticas sustentáveis e informações sobre 
como apoiar o descarte responsável.
</li>

</td>
</tr>
</tbody>
</table>

## Histórias de Usuários

| EU COMO... `QUEM` | QUERO/PRECISO ... `O QUE` | PARA ... `PORQUE` |
| ----------------- | ------------------------- | ----------------- |
| Consumidor              | Informações claras sobre onde e como devo descartar meus dispositivos eletrônicos que não uso mais | Quero garantir que estou seguindo as práticas corretas e não causando danos ao meio ambiente       |
| Usuário               | Encontrar um local de coleta o mais próximo possível para o descarte de dispositivos obsoletos                       | Quero realizar o descarte da forma correta e no local correto e evitar que o aparelho vá para o lixo comum |
| Técnico de reparo     | Receber informações sobre o descarte correto de peças eletrônicas que não serão utilizadas| Quero garantir que estou gerenciando os resíduos de forma correta e não estou contribuindo para a poluição |
| Usuário               | Enviar informações para amigos e familiares para que fiquem cientes dos riscos ambientais e para a saúde causados pelo descarte incorreto de equipamentos eletrônicos | Quero espalhar o conhecimento sobre o lixo eletrônico para que cada vez mais pessoas estejam cientes do seu impacto e façam sua parte descartando da forma correta|
| Fabricantes e Vendedores de eletrônicos| Ter informações sobre o descarte correto de lixo eletrônico para implementar um programa de retorno para produtos no fim do ciclo de vida | Ajudar consumidores a descartar seus produtos de maneira adequada |


## Requisitos do Projeto

### Requisitos Funcionais

| ID      | Descrição | Prioridade |
| -----   | --------- | ---------- |
| RF-01   | A aplicação deve poder localizar o usuário, caso ele permita       |  ALTA        |
| RF-02   | A aplicação deve permitir que o usuário forneça seu endereço manualmente para que os pontos de coleta próximos a ele sejam fornecidos | ALTA |
| RF-03   | A aplicação deve fornecer uma lista de endereços que recebem descartes para o usuário       | ALTA        |
| RF-04   | A aplicação deve ter uma opção de filtrar os endereços em função do equipamento a ser descartado       | MÉDIA        |
| RF-05   | Para cada equipamento deverá ter um ícone com as informações pertinentes ao item, tais como a forma de descarte e dados disponíveis sobre os impactos ao meio ambiente | MÉDIA |
| RF-06   | A aplicação deve ter uma opção de filtrar os endereços em função do horário de funcionamento       | BAIXA  |
| RF-07   |  A aplicação deve permitir o usuário selecionar um endereço e ter informações sobre o local, tais como horário de funcionamento, equipamentos aceitos, informações de contato e se realiza coleta   | BAIXA        |
| RF-08   |  A aplicação deve ter uma página dedicada a conscientização dos usuários com relação aos impactos e riscos provocados pelo descarte incorreto dos equipamentos eletrônicos | ALTA        |
| RF-09   |  A aplicação deve permitir o usuário editar e alterar as informações do seu perfil       | BAIXA        |
| RF-10   |  A aplicação deve permitir o usuário compartilhar o link com o local de coleta | BAIXA        |

\*\*Prioridade: Alta / Média / Baixa.

### Requisitos não Funcionais

| ID     | Descrição | Prioridade |
| ------ | --------- | ---------- |
| RNF-01 | A aplicação deve ter uma interface intuitiva e fácil de navegar, permitindo que os usuários tenham autonomia ao utilizá-la e encontre as informações rapidamente, independente do seu nível de familiaridade com a tecnologia.       | ALTA        |
| RNF-02 |  Os menus, botões e inputs devem ser claramente rotulados e organizados de forma lógica que favoreça a usabilidade.       | ALTA        |
| RNF-03 |  A aplicação deve ser responsiva, visando garantir uma experiência consistente em dispositivos de tamanhos variados.       | MÉDIA        |
| RNF-04 | A aplicação deve garantir que as informações dos usuários sejam protegidas por criptografia, garantindo a segurança das informações compartilhadas tanto em trânsito quanto em repouso.| ALTA |
| RNF-05 | A aplicação deve seguir as diretrizes da LGPD (LEI Nº 13.709)       | ALTA        |
| RNF-06 | A aplicação deve ser compatível com os principais navegadores da web (Firefox, Chrome, Safari e Edge)        | ALTA        |
| RNF-07 | A aplicação deve estar em conformidade com as leis e regulamentações nacionais relacionadas ao manejo e descarte de lixo eletrônico, como a Política Nacional de Resíduos Sólidos (Lei 12.305/2010) e normativas estabelecidas pelo Conselho Nacional do Meio Ambiente (CONAMA). | ALTA        |
| RNF-08 | A aplicação deve implementar o carregamento assíncrono dos dados, permitindo que a interface permaneça responsiva enquanto informações adicionais são carregadas em segundo plano       | ALTA        |


\*\*Prioridade: Alta / Média / Baixa.
