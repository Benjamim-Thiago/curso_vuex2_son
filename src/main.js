import Vue from 'vue'
import {Time} from './time/time'

new Vue({
  el: '#app',
  data:{
    times: [
      new Time("São Paulo", require('./assets/sao_paulo_60x60.png')),
      new Time("Santos", require('./assets/santos_60x60.png')),
      new Time("Sport", require('./assets/sport_60x60.png')),
      new Time("Gremio", require('./assets/gremio_60x60.png')),
      new Time("Vitoria", require('./assets/vitoria_60x60.png'))
    ],
    alphabet: {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F'
    }
  }
})
