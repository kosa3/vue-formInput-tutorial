import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
    el: '#app',
    data: {
      title: 'The Vue.js instance'
    },
    beforeCreate: function () {
        console.log('beforeCreate()');
    },
    created: function () {
        console.log('created()');
    },
    beforeMount: function () {
        console.log('beforeMount()');
    },
    mounted: function () {
        console.log('mounted()');
    },
    beforeUpdate: function () {
        console.log('beforeUpdate()');
    },
    beforeDestroy: function () {
        console.log('beforeDestroy()');
    },
    destroyed: function () {
        console.log('destroy()');
    },
});