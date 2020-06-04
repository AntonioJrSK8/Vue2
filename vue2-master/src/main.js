import Vue from 'vue'
import {Time} from './time';
import _ from 'lodash';

// @ts-ignore
require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');

// @ts-ignore
let meuVue = new Vue({
    el: '#app',
    data: {
        order: {
            keys: ['pontos', 'gm', 'gs'],
            sort: ['desc', 'desc', 'asc']
        },
        filter: '',
        colunas: ['nome', 'pontos', 'gm', 'gs', 'saldo'],
        times: [
            // @ts-ignore
            new Time('Palmeiras', require('./assets/palmeiras_60x60.png')),
            // @ts-ignore
            new Time('Flamengo', require('./assets/flamengo_60x60.png')),
            // @ts-ignore
            new Time('Atlético-MG', require('./assets/atletico_mg_60x60.png')),
            // @ts-ignore
            new Time('Santos', require('./assets/santos_60x60.png')),
            // @ts-ignore
            new Time('Botafogo', require('./assets/botafogo_60x60.png')),
            // @ts-ignore
            new Time('Atlético-PR', require('./assets/atletico-pr_60x60.png')),
            // @ts-ignore
            new Time('Corinthians', require('./assets/corinthians_60x60.png')),
            // @ts-ignore
            new Time('Grêmio', require('./assets/gremio_60x60.png')),
            // @ts-ignore
            new Time('Fluminense', require('./assets/fluminense_60x60.png')),
            // @ts-ignore
            new Time('Ponte Preta', require('./assets/ponte_preta_60x60.png')),
            // @ts-ignore
            new Time('Chapecoense', require('./assets/chapecoense_60x60.png')),
            // @ts-ignore
            new Time('São Paulo', require('./assets/sao_paulo_60x60.png')),
            // @ts-ignore
            new Time('Cruzeiro', require('./assets/cruzeiro_60x60.png')),
            // @ts-ignore
            new Time('Sport', require('./assets/sport_60x60.png')),
            // @ts-ignore
            new Time('Coritiba', require('./assets/coritiba_60x60.png')),
            // @ts-ignore
            new Time('Internacional', require('./assets/internacional_60x60.png')),
            // @ts-ignore
            new Time('Vitória', require('./assets/vitoria_60x60.png')),
            // @ts-ignore
            new Time('Figueirense', require('./assets/figueirense_60x60.png')),
            // @ts-ignore
            new Time('Santa Cruz', require('./assets/santa_cruz_60x60.png')),
            // @ts-ignore
            new Time('América-MG', require('./assets/america_mg_60x60.png')),
        ],
        novoJogo: {
            casa: {
                time: null,
                gols: 0
            },
            fora: {
                time: null,
                gols: 0
            }
        },
        view: 'tabela'
    },
    methods: {
        fimJogo(){
            let timeAdversario = this.novoJogo.fora.time;
            let gols = +this.novoJogo.casa.gols;
            let golsAdversario = +this.novoJogo.fora.gols;
            this.novoJogo.casa.time.fimJogo(timeAdversario, gols, golsAdversario);
            // @ts-ignore
            this.showView('tabela');
        },
        createNovoJogo(){
            let indexCasa = Math.floor(Math.random() * 20),
                indexFora = Math.floor(Math.random() * 20);

            this.novoJogo.casa.time = this.times[indexCasa];
            this.novoJogo.casa.gols = 0;
            this.novoJogo.fora.time = this.times[indexFora];
            this.novoJogo.fora.gols = 0;
            // @ts-ignore
            this.showView('novojogo');
        },
        showView(view){
            this.view = view;
        },
        sortBy(coluna){
            this.order.keys = coluna;
            // @ts-ignore
            this.order.sort = this.order.sort == 'desc' ? 'asc': 'desc';
        }
    },
    computed: {
        timesFiltered(){
            // @ts-ignore
            let colecao = _.orderBy(this.times, this.order.keys, this.order.sort);

            return _.filter(colecao, item => {
                return item.nome.indexOf(this.filter) >=0;
            });
        }
    },
    filters: {
        saldo(time){
            return time.gm - time.gs;
        },
        ucwords(value){
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
    }
});
