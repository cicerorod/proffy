<h3 align="center">
    <img alt="Proffy" src=".github/logo.svg" height="50px" />
    <br>Next Level Week #2<br/>
    Node.js | ReactJS | React Native
    
</h3>

<p align="center">
  <img alt="Concluído" src="https://img.shields.io/badge/Status-Conclu%C3%ADdo-green">
</p>




Este é um projeto desenvolvido durante a Next Level Week #2, realizada pela
**[Rocketseat](https://rocketseat.com.br/)** durante os dias 3 a 9 de Agosto de 2020.

O Proffy visa conectar profissionais da educação para com possíveis novos alunos. Na plataforma você pode cadastrar-se como professor ou simplesmente listar todos os profissionais disponíveis com base em um sistema de filtros (dia da semana, horário e disciplina ministrada).

## <img src="https://img.icons8.com/ios-filled/20/000000/browser-window.png"/> Página

<p align="center">
 WebSite: https://proffy-cicerorod.netlify.app/
 </p>

<p align="center">
 <img src="https://github.com/cicerorod/proffy/blob/master/img/Tela.PNG" alt="animated" />
</p>


## ![](https://img.icons8.com/metro/20/000000/run-command.png) Execução

1. Clonar via prompt de comando o projeto em uma pasta de sua preferência: `git clone https://github.com/cicerorod/proffy.git`
2. Acessar a pasta principal do projeto via prompt de comando. Ex: `cd proffy`;

### Server
Aplicação feita em Node.js e Typescript que utiliza o SQLite como banco de dados.
Ele é indispensável para a aplicação, portanto deve ser o primeiro a entrar em funcionamento.

  # API
  $ cd server
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Configurando o banco de dados e criando as tabelas.
  $ yarn knex:migrate # ou npm run knex:migrate


```bash
# Navegue até a pasta server
cd server

# Para instalar todas as dependências do projeto
yarn # ou npm install

# Para criar as tabelas no banco de dados
yarn knex:migrate # ou npm run knex:migrate

# Para iniciar a API
yarn start # ou npm start
```
#### Dependências de desenvolvimento
- cors
- express
- knex
- sqlite3
- typescript
------------


### Web
Aplicação feita inteiramente em React.js e Typescript, que consome uma API REST fornecida pelo server.

```bash
# Navegue até a pasta web
cd web

# Para instalar todas as dependências do projeto
yarn # ou npm install

# Para rodar a aplicação
yarn start # ou npm start
```
#### Dependências de desenvolvimento
- axios
- react-router-dom
- typescript
------------


#### Mobile
Aplicação feita inteiramente em React Native e Typescript, que consome uma API REST fornecida pelo server.

```bash
# Navegue até a pasta mobile
cd mobile

# Para instalar todas as dependências do projeto
yarn # ou npm install

# Para rodar a aplicação
yarn start # ou npm start
```
#### Dependências de desenvolvimento
- expo-google-fonts
- react-native-community/async-storage
- react-native-community/masked-view
- react-navigation/bottom-tabs
- react-navigation/native
- react-navigation/stack
- axios
- expo
- expo-font
- react-native-gesture-handler
- typescript
------------


## ![](https://img.icons8.com/ios-filled/20/000000/hammer.png) Bibliotecas e tecnologias utilizadas:

- **[HTML](https://www.w3schools.com/html/)**
- **[JavaScript](https://www.w3schools.com/js/)**
- **[CSS](https://www.w3schools.com/Css/)**
- **[ES6+](https://www.w3schools.com/Js/js_es6.asp)**
- **[ReactJS](https://reactjs.org/)**
- **[Json-Server](https://reactjs.org/)**
- **[React Dom](https://www.npmjs.com/package/react-dom)**
- **[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=hackingcarreira_wmc-github-gllemos)**
- **[Vercel](https://vercel.com/)**
- **[Heroku](https://heroku.com/)**

## ![](https://img.icons8.com/ios-glyphs/20/000000/pull-request.png) Contribuições

1. Faça o _fork_ do projeto (<https://github.com/cicerorod/proffy/fork>)
2. Crie uma _branch_ para sua modificação (`git checkout -b feature/[nome]`)
3. Faça o _commit_ (`git commit -am 'Add files [nome]'`)
4. _Push_ (`git push origin feature/[nome]`)
5. Crie um novo _Pull Request_

## ![](https://img.icons8.com/windows/20/000000/regular-document.png) Licença

Este projeto está sob a licença do MIT. Consulte [LICENSE](https://github.com/cicerorod/proffy/blob/master/LICENSE) para obter mais informações.

## ![](https://img.icons8.com/ios-glyphs/22/000000/code-file.png) Desenvolvedor

<img src="https://avatars.githubusercontent.com/cicerorod" width=115>

[![](https://img.icons8.com/fluent/30/000000/github.png)](https://github.com/cicerorod)
[![](https://img.icons8.com/metro/25/000000/linkedin.png)](https://www.linkedin.com/in/c%C3%ADcero-rodrigues-89623784/)
[![](https://img.icons8.com/metro/25/000000/facebook.png)](https://www.facebook.com/cicero.rodrigues.90834)
[![](https://img.icons8.com/material-rounded/29/000000/instagram-new.png)](https://www.instagram.com/cicero_rod/)
[![](https://img.icons8.com/metro/26/000000/email.png)](mailto:cicerorod@gmail.com)

<p align="center">
  <img src="https://img.icons8.com/wired/32/000000/icons8-new-logo.png" >
  </br>
  <a href="https://icons8.com/icon/">Icons by Icons8</a>
</p>
