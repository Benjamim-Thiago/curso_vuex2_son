import Vue from 'vue'
import {Team} from './team/team'
import _ from 'lodash';

require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');

let myVue = new Vue({
  el: '#app',
  data:{
    teams: [
      new Team('Palmeiras', require('./assets/palmeiras_60x60.png')),
      new Team('Flamengo', require('./assets/flamengo_60x60.png')),
      new Team('Atlético-MG', require('./assets/atletico_mg_60x60.png')),
      new Team('Santos', require('./assets/santos_60x60.png')),
      new Team('Botafogo', require('./assets/botafogo_60x60.png')),
      new Team('Atlético-PR', require('./assets/atletico-pr_60x60.png')),
      new Team('Corinthians', require('./assets/corinthians_60x60.png')),
      new Team('Grêmio', require('./assets/gremio_60x60.png')),
      new Team('Fluminense', require('./assets/fluminense_60x60.png')),
      new Team('Ponte Preta', require('./assets/ponte_preta_60x60.png')),
      new Team('Chapecoense', require('./assets/chapecoense_60x60.png')),
      new Team('São Paulo', require('./assets/sao_paulo_60x60.png')),
      new Team('Cruzeiro', require('./assets/cruzeiro_60x60.png')),
      new Team('Sport', require('./assets/sport_60x60.png')),
      new Team('Coritiba', require('./assets/coritiba_60x60.png')),
      new Team('Internacional', require('./assets/internacional_60x60.png')),
      new Team('Vitória', require('./assets/vitoria_60x60.png')),
      new Team('Figueirense', require('./assets/figueirense_60x60.png')),
      new Team('Santa Cruz', require('./assets/santa_cruz_60x60.png')),
      new Team('América-MG', require('./assets/america_mg_60x60.png')),
    ],

    newSoccerMatch: {
      homeTeam: {
        team: null,
        goals: 0
      },
      visitantTeam: {
        team: null,
        goals: 0
      }
    }
  },
  created(){
    let homeIndex = Math.floor(Math.random() * 20),
        visitantIndex = Math.floor(Math.random() * 20);

    this.newSoccerMatch.homeTeam.team = this.teams[homeIndex];
    this.newSoccerMatch.homeTeam.goals = 0;
    this.newSoccerMatch.visitantTeam.team = this.teams[visitantIndex];
    this.newSoccerMatch.visitantTeam.goals = 0;

  },
  mounted: function(){
      document.getElementById('app').style.display = "block";
  }
})

