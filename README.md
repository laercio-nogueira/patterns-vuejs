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
Abra o link: ```http://127.0.0.1:8081```

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

## Instruções do projeto

### SCSS e BEM
Foi utilizado em praticamente todo o codigo, a estrutura de scss com copilador sass, com a estrutura de classes seguindo o padrao BEM (Bloco, Elemento e Modificador)

### Clean Archteture e Atomic Design
Para criar a estrutura do projeto, utilizei o padrao de clean-archteture para estruturar as pastas.
Para desenvolvimento dos components, utilizei o padrão [Atomic Design](https://medium.com/pretux/atomic-design-o-que-%C3%A9-como-surgiu-e-sua-import%C3%A2ncia-para-a-cria%C3%A7%C3%A3o-do-design-system-e3ac7b5aca2c), utilizando em partes atom, molecule e pages, deixando de lado a parte de organismo e template, por ser um projeto bem pequeno.

### Webpack e Http-Server
Para buildar o projeto, utilizei o webpack 5.82.0, configurando atraves do arquivo webpack.config.js, buildado para a pasta public na raiz e usando o template index.html para poder criar uma tag html ```<div id="app"></div>``` para usar no vue.

### Persistencia de dados no localStore
O sistema nao utiliza banco de dados, então, os dados sao persistidos atraves do vuex-persist, que persiste os dados cadastrados no localstore, atraves do vuex

### Conventional Commit
Todos os commits, seguem um padrao estipulado pelo [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/#specification)

### Mascara de campo
Os campos que possuem validaçao de formato, como document e telefone, usam a tecnologia de mascara, preenchendo ponto, traço e parenteses automaticamente, pois foi configurado o vue-the-mask, para auxiliar o preenchimento dos mesmos

### Teste Unitário
<img src="https://github.com/laercio-nogueira/patterns-vuejs/assets/14927246/88a830e1-2673-47fc-b504-15a8243b1207" width=50% height=50%>


## Telas

#### Tela Principal
Tela de entrada, onde é visualizado os clientes cadastrados, permitindo excluir, ou vincular os produtos com o cliente

![image](https://github.com/laercio-nogueira/patterns-vuejs/assets/14927246/7cba4178-0814-4793-b4f1-8572fee3d6a0)

#### Tela Principal - Modal
Tela de entrada, quando voce clica no botão vincular produto, abre o modal e permite o cliente vincular um produto

![image](https://github.com/laercio-nogueira/patterns-vuejs/assets/14927246/b9ccf24d-c78d-4860-a9fd-ad8675ae9b1c)

#### Cadastrar Produtos
Tela de cadastro e exibição de produtos

![image](https://github.com/laercio-nogueira/patterns-vuejs/assets/14927246/c64fb66b-1766-4f77-88eb-7a1fd208edb8)

#### Cadastrar Clientes
Tela de cadastro de clientes

![image](https://github.com/laercio-nogueira/patterns-vuejs/assets/14927246/dc99d09c-3c1a-4019-b794-196150f3898e)

## Validação
Validações necessarias, para ativar os botoes no formulario ou para nao duplicar registro

### Clientes

- Campo cliente deve contem pelo menos 2 digitos
- Campo documento, deve ser um cpf de 11 digitos, separado com a mascara ###.###.###-##
- Campo telefone, deve conter de 11 digitos (DDD + Telefone), separado com a mascara (##) #####-####
- Campo email, deve conter @, um texto antes e um texto depois do @ e 1 ponto
- Documento não pode conter já cadastrado.

### Produtos

- Campo Produto deve conter pelo menos 2 digitos

### Vincular produto ao cliente

- Campo deve conter alguma escolha.
- Produto nao pode ja ter sido vinculado ao mesmo cliente.

  
