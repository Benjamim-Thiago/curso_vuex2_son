import Vue from 'vue';

Vue.filter('goalDifference', team => team.gscored - team.gconceded);

Vue.filter('ucwords', value => value.charAt(0).toUpperCase() + value.slice(1));