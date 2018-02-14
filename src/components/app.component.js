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
        
        <div v-show="view == 'table'">
          <team-list></team-list>
        </div>
        
        <div v-show="view == 'newSoccer'">
          <team-soccer></team-soccer>
        </div>

        <div v-show="view == 'zone'">
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
    showView(view){
      this.view = view;
    }
  }
};
  