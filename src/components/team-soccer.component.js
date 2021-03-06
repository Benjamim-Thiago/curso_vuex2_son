import event from '../event';
import store from '../store';

export default {
  template: `        
    <div style="margin-top:20px;">
        <form class="form-inline">
        <div class="form-group">
            <input type="text" class="form-control" v-model="newSoccerMatch.homeTeam.goals" @keyup.enter="endSoccer()">
            <label  v-if="newSoccerMatch.homeTeam.team" class="control-label">
                {{newSoccerMatch.homeTeam.team.name}}
                <img  :src="newSoccerMatch.homeTeam.team.shield" style="height: 30px; width: 30px;">
            </label>
        </div>

        <span>X</span>
        
        <div class="form-group">
            <label v-if="newSoccerMatch.visitantTeam.team" class="control-label">
            <img  :src="newSoccerMatch.visitantTeam.team.shield" style="height: 30px; width: 30px;">
            {{newSoccerMatch.visitantTeam.team.name}}
            </label>
            
            <input type="text" class="form-control" v-model="newSoccerMatch.visitantTeam.goals" @keyup.enter="endSoccer()">
        </div>
        <button class="btn btn-primary" @click.prevent="endSoccer()">Fim do Jogo</button>
        </form>
    </div>
  
  `,
  mounted(){
    this.initSoccer(store.state.teams);
  },
  data(){
    return {
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
    }
  },
  methods:{
    endSoccer(){
      let adversaryTeam = this.newSoccerMatch.visitantTeam.team;
      let teamHome = this.newSoccerMatch.homeTeam.team;
      let goals = +this.newSoccerMatch.homeTeam.goals;
      let adversaryGoals = +this.newSoccerMatch.visitantTeam.goals;
     
      teamHome.endOfSoccerMatch(adversaryTeam, goals, adversaryGoals);
     
      store.commit('update', teamHome);
      store.commit('update', adversaryTeam);
      store.commit('show-team-list');
    },
    initSoccer(teams){
      let homeIndex = Math.floor(Math.random() * 20),
          visitantIndex = Math.floor(Math.random() * 20);
  
      this.newSoccerMatch.homeTeam.team = teams[homeIndex];
      this.newSoccerMatch.homeTeam.goals = 0;
      this.newSoccerMatch.visitantTeam.team = teams[visitantIndex];
      this.newSoccerMatch.visitantTeam.goals = 0;
    }
  }
};
  