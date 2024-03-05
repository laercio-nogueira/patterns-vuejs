# Projeto da Data Stone
_Design Patterns in VueJS para Data Stone_

[![npm](https://img.shields.io/badge/node-14.20.1-passing?style=flat&logo=node
)](https://nodejs.org/) [![npm](https://img.shields.io/badge/npm-9.2.0-blue)](https://nodejs.org/) [![npm](https://img.shields.io/badge/tests-passing-orange)](https://nodejs.org/)

## Instalação

```console
$ npm install
```

## Execução Desenvolvimento
```console
$ npm run build-watch
```

## Execução Produção
```console
$ npm run prod
````

## Pacotes Externos

- [Vue](https://vuejs.org/) - Uma abstração acessível, otimizada e versátil para construção de interfaces de aplicações da Web.
- [Vuex](https://vuex.vuejs.org/) - Vuex é um padrão de gerenciamento de estado + biblioteca para aplicações Vue.js.
- [Jest](https://jestjs.io/pt-BR/) - Jest é um poderoso Framework de Testes em JavaScript com um foco na simplicidade.
- [Eslint](https://eslint.org/) - Analisa estaticamente seu código para encontrar problemas rapidamente.
- [Vuex Persist](https://championswimmer.in/vuex-persist/) - Um plugin que permite salvar o estado do seu aplicativo no localStorage.
- [Vue The Mask](https://vuejs-tips.github.io/vue-the-mask/) - Uma entrada de máscara, livre de dependências criada específica para Vue.js
- [Http-Server](https://github.com/http-party/http-server) - Servidor HTTP estático de linha de comando simples e sem configuração
- [Husky](https://typicode.github.io/husky/) - Husky aprimora seus commits e envia mensagens, codifica e executa testes automaticamente ao commitar.
- [Webpack](https://webpack.js.org/)  - Um empacotador de módulo estático para aplicativos JavaScript modernos.

## Designs Patterns

### SCSS e BEM
Foi utilizado em praticamente todo o codigo, a estrutura de scss com copilador sass, com a estrutura de classes seguindo o padrao BEM (Bloco, Elemento e Modificador)

### Clean Archteture e Atomic Design
Para criar a estrutura do projeto, utilizei o padrao de clean-archteture para estruturar as pastas.
Para desenvolvimento dos components, utilizei o padrão [Atomic Design](https://medium.com/pretux/atomic-design-o-que-%C3%A9-como-surgiu-e-sua-import%C3%A2ncia-para-a-cria%C3%A7%C3%A3o-do-design-system-e3ac7b5aca2c), utilizando em partes atom, molecule e pages, deixando de lado a parte de organismo e template, por ser um projeto bem pequeno.

### Webpack e Http-Server
Para buildar o projeto, utilizei o webpack 5.82.0, configurando atraves do arquivo webpack.config.js, buildado para a pasta public na raiz e usando o template index.html para poder criar uma tag html ```<div id="app"></div>``` para usar no vue.
