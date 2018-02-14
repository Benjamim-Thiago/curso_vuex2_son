import event from '../event';
import _ from 'lodash';
import store from '../store';

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
        search:''//,
        //teams: [],
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
        event.$emit('show-team-newSoccer');
        event.$emit('get-teams' , this.teams);
      },
      sortBy(index){
        this.order.keys = this.columns[index];
        this.order.sort = this.order.sort == 'desc' ? 'asc': 'desc';
      }
    },
    computed: {
      teams(){
        return store.state.teams;
        //return this.$store.state.teams;
      },
      listTeams(){
        let collection = _.orderBy(this.teams, this.order.keys, this.order.sort);
        return _.filter(collection, item => {
          return item.name.toLowerCase().indexOf(this.search.toLowerCase()) >=0;
        })
      }
    }
  };
  