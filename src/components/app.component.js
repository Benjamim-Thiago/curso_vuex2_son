import TeamListComponent from './team-list.component';
import TeamSoccerComponent from './team-soccer.component';
import TeamZoneComponent from './team-zone.component';
import event from '../event';
import store from '../store';

export default {
  components:{
    'team-list' : TeamListComponent,
    'team-soccer' : TeamSoccerComponent,
    'team-zone' : TeamZoneComponent
  },
  template: 
  `
    <div class="container">
      <div class="row">
        <h3>Tabela campeonato brasileiro série A 2016</h3>
        <br/><br/>        
        <a class="btn btn-default" @click.prevent="showTable">Tabela</a>
        <a class="btn btn-primary" @click.prevent="showNewSoccer">Novo jogo</a>
        <a class="btn btn-warning" @click.prevent="showZone">Ver Zona</a>
        <br>
        <div v-if="view == 'table'">
          <team-list></team-list>
        </div>
        
        <div v-if="view == 'newSoccer'">
          <team-soccer></team-soccer>
        </div>

        <div v-if="view == 'zone'">
          <team-zone></team-zone>
        </div>
      </div>
    </div>
  
  `
  ,
  computed:{
    view(){
      return store.state.view;
      //return this.$store.state.view;
    }
  },
  methods:{
    showTable(){
      store.commit('show-team-list');      
    },
    showNewSoccer(){
      store.commit('show-team-newSoccer');
    },
    showZone(){
      store.commit('show-team-zone');
    }
  }
};
  