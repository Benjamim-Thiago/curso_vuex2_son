import TeamListComponent from './team-list.component';
import TeamSoccerComponent from './team-soccer.component';
export default {
  components:{
    'team-list' : TeamListComponent,
    'team-soccer' : TeamSoccerComponent
  },
  template: `
    <div class="container">
      <div class="row">
        <h3>Tabela campeonato brasileiro série A 2016</h3>
        
        <div v-if="view == 'table'">
          <team-list></team-list>
        </div>
        
        <div v-else>
          <team-soccer></team-soccer>
        </div>
      </div>
    </div>
  
  `,
  data(){
    return {
      //view: 'table'
      view: 'newSoccer'
    }
  },
  methods:{
    showView(view){
      this.view = view;
    }
  }
};
  