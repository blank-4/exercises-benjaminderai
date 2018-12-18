new Vue({
    el: '#app',
    data: function() {
      return {
        afficher: false,
        texte:""
      }
    },
    methods:{
        afficheralerte(){
            alert(this.texte);
        }
    }
  })