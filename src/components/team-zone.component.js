import store from '../store';

export default {
    template: 
    `
        <span>
          <h3>Times que irão para a Libertadores</h3>  
          <table class="table table-striped">
            <thead>
              <th>                 
                Nome
              </th>
            </thead>
            <tbody>
              <tr v-for="item in liberatingTeams">
                <td>
                  <img v-bind:src="item.shield" :alt="item.name" style="height: 30px; width: 30px;">
                  <strong>{{item.name}}</strong>
                </td>
              </tr>
            </tbody>
          </table>

          <h3>Times que serão rebaixados</h3>  
          <table class="table table-striped">
            <thead>
              <th>                 
                Nome
              </th>
            </thead>
            <tbody>
              <tr v-for="item in demotedTeams">
                <td>
                  <img v-bind:src="item.shield" :alt="item.name" style="height: 30px; width: 30px;">
                  <strong>{{item.name}}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </span>  
`
,
  computed: {
    liberatingTeams(){
      return store.getters.liberatingTeams;
    },
    demotedTeams(){
      return store.getters.demotedTeams;
    }
  }
};
  