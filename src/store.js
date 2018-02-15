import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import {Team} from './team/team';

Vue.use(Vuex);
Vue.use(VueResource);

const state = {
    view : 'table',
    //view : 'zone',
    teams: [] 
};
const mutations = {
    'set-teams'(state, teams){
        state.teams = teams;
    },
    update(state, team){
        let index = state.teams.findIndex(element => team.id == element.id);
        if(index != -1){
            state.teams[index] = team;
        }
    },
    'show-team-list'(state){
        state.view = 'table';
    },
    'show-team-newSoccer'(state){
        state.view = 'newSoccer';
    },
    'show-team-zone'(state){
        state.view = 'zone';
    }
};

const actions = {
    'load-team'(context){
        Vue.http.get('http://localhost:8080/dist/teams.json').then(response => {
            let teams = response.data.map(element => new Team(element.id, element.name, element.shield));
            context.commit('set-teams', teams);
        });
    }
};

export default new Vuex.Store({
    state,
    getters:{
        liberatingTeams: state => state.teams.slice(0, 6),
        demotedTeams: state => state.teams.slice(16, 20)
    },
    mutations,
    actions
});