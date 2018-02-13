import {Team} from '../team/team'
import _ from 'lodash';

export default {
    template: 
    `
        <span>
          <a class="btn btn-primary" @click.prevent="showNewSoccer">Novo jogo</a>
          <br/><br/>
          <div class="form-inline pull-right">
              <input type="search" class="form-control" placeholder="Buscar" v-model="search">
          </div>
          <table class="table table-striped">
            <thead>
              <th v-for="(column, index) in columnsNames">                 
                  <a href="#" @click.prevent="sortBy(index)">{{column | ucwords}}</a>
              </th>
            </thead>
            <tbody>
              <tr v-for="item in listTeams" :key="item.id">
                <td>
                  <img v-bind:src="item.shield" :alt="item.name" style="height: 30px; width: 30px;">
                  <strong>{{item.name}}</strong>
                </td>
                <td>{{item.points}}</td>
                <td>{{item.gscored}}</td>
                <td>{{item.gconceded}}</td>
                <td>{{ item | goalDifference}}</td>
              </tr>
            </tbody>
          </table>
        </span>  
`
,
    data(){
      return {
        order: {
          keys: ['pontos', 'gm', 'gs'],
          sort: ['desc', 'desc', 'asc']
        },
        columnsNames: ['nome', 'pontos', 'gm', 'gs', 'saldo'],
        columns: ['name', 'points', 'gscored', 'gconceded'],
        search:'',
        teams: [
          new Team('Palmeiras', require('../assets/palmeiras_60x60.png')),
          new Team('Flamengo', require('../assets/flamengo_60x60.png')),
          new Team('Atlético-MG', require('../assets/atletico_mg_60x60.png')),
          new Team('Santos', require('../assets/santos_60x60.png')),
          new Team('Botafogo', require('../assets/botafogo_60x60.png')),
          new Team('Atlético-PR', require('../assets/atletico-pr_60x60.png')),
          new Team('Corinthians', require('../assets/corinthians_60x60.png')),
          new Team('Grêmio', require('../assets/gremio_60x60.png')),
          new Team('Fluminense', require('../assets/fluminense_60x60.png')),
          new Team('Ponte Preta', require('../assets/ponte_preta_60x60.png')),
          new Team('Chapecoense', require('../assets/chapecoense_60x60.png')),
          new Team('São Paulo', require('../assets/sao_paulo_60x60.png')),
          new Team('Cruzeiro', require('../assets/cruzeiro_60x60.png')),
          new Team('Sport', require('../assets/sport_60x60.png')),
          new Team('Coritiba', require('../assets/coritiba_60x60.png')),
          new Team('Internacional', require('../assets/internacional_60x60.png')),
          new Team('Vitória', require('../assets/vitoria_60x60.png')),
          new Team('Figueirense', require('../assets/figueirense_60x60.png')),
          new Team('Santa Cruz', require('../assets/santa_cruz_60x60.png')),
          new Team('América-MG', require('../assets/america_mg_60x60.png')),
        ],
      }
    },
    methods:{
      showNewSoccer(){
        /*let homeIndex = Math.floor(Math.random() * 20),
            visitantIndex = Math.floor(Math.random() * 20);
    
        this.newSoccerMatch.homeTeam.team = this.teams[homeIndex];
        this.newSoccerMatch.homeTeam.goals = 0;
        this.newSoccerMatch.visitantTeam.team = this.teams[visitantIndex];
        this.newSoccerMatch.visitantTeam.goals = 0;
        */        
        this.$parent.showView('newSoccer');
        //setTimeout(()=>{
          this.$parent.$children[1].initSoccer(this.teams);
        //});
      },
      sortBy(index){
        this.order.keys = this.columns[index];
        this.order.sort = this.order.sort == 'desc' ? 'asc': 'desc';
      }
    },
    computed: {
      listTeams(){
        let collection = _.orderBy(this.teams, this.order.keys, this.order.sort);
        return _.filter(collection, item => {
          return item.name.toLowerCase().indexOf(this.search.toLowerCase()) >=0;
        })
      }
    }
  };
  