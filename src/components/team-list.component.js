import event from '../event';
import _ from 'lodash';
import store from '../store';

export default {
    template: 
    `
        <span>
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
              <tr v-for="(item, index) in listTeams" :class="{'success': index < 3, 'warning': index > 2 && index <6, 'danger': index > 15}">
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
  created(){
    store.dispatch('load-team');
  },
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
  