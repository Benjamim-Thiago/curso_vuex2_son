import Vue from 'vue'
import {Team} from './team/team'
import AppComponent from './components/app.component';
import './filters';
import _ from 'lodash';

require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');

let myVue = new Vue({
  el: '#app',
  components:{
    "app": AppComponent
  }  
});

