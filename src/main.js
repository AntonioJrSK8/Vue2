// @ts-nocheck
import Vue from 'vue'
//import App from './App.vue'

//Importando a classe ES2015
import {Time} from './time'

//requisição usado para importar style
require("style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css");
//requisiçnao usado para importar o bootstrap
require('bootstrap')


var exemplo = new Vue({
  el: "#app",
  data: {
    titulo: "Exemplo de Prop bind",
    bool: true,
    numeroInteiro: 10,
    numeroFloat: 10.5,

    times: [
      new Time('America MG', require('./assets/america_mg_60x60.png')),
      new Time('Atletico MG', require('./assets/atletico_mg_60x60.png')),
      new Time('Atletico PR', require('./assets/atletico-pr_60x60.png'))
    ],
    alfabero: {
      a : 'A',
      b : 'B',
      c : 'C',
      d : 'D',
      e : 'E'
    }
  }
  //render: h => h(App)
});
