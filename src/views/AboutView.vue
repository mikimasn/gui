<template>
  <div class="centre" v-if="waiting">
    <h1>Zostań z nami na chwilę</h1>
    <p>Właśnie przetwarzamy twoje logowanie</p><br>
    <p> Kiedy to się skończy będziesz mógł wrócić na poprzednią stronę</p>
  </div>
    <div  class="centre" v-if="!waiting&&!is">
    <h1>Nie udało się</h1>
    <p>Okazało się że nic tu dla ciebie nie ma :(</p><br>
    <p> Jeżeli uważasz że to błąd to spróbuj ponownie a jeżeli problem będzie się powtarzał napisz do Pythona</p>
  </div>
      <div  class="centre" v-if="!waiting&&is">
    <h1>Udało się</h1>
    <p> Teraz możesz już zamknąć te okno i zacząć pracę z naszym narzędziem</p>
  </div>
</template>
<script>
import config from '../config.json'
async function isloggined(ele){
  var string = window.location.search.split("=");
  fetch(config.api+`/login?code=${string[1]}`).then(async res=>{
    if(res.status==400){
      ele.is=false;
      ele.waiting=false;
    }
    else{
      var response = await res.json();
      localStorage.setItem("token",response.token);
      ele.waiting=false;
      ele.is=true;
    }
  })
    }
    function validate(){
      var string = window.location.search.split("=");
      if(string.length==2&&string[0]=="?code"){
        isloggined(this);
      }
      else{
        this.waiting=false;
        this.is=false;
      }
    }
export default {
  name: 'HomeView',
  components: {
  },
  data(){
    return{
      waiting:true,
      is:false,
    }
  },
  methods:{
    isloggined:isloggined,
    validate:validate,
  },
  mounted(){
validate.call(this);
  }
}
</script>
<style>
.centre{
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  position:absolute;
}
</style>
