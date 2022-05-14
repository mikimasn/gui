<template>
<div id="head"><button v-if="is" @click = "plain=!plain" id="change_button">{{plain?"embed":"plain text"}}</button><LoadingComp v-if="!is"/></div>
  <div class="home">
    <NonLoggined v-if="!is"/>
    
    <LogginedComp v-if="is&&plain"/>
    <EmbedEditor v-if="is&&!plain"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoadingComp from "@/components/LoadingComp.vue"
import config from '../config.json'
import NonLoggined from "@/components/NonLoginned.vue"
import LogginedComp from "@/components/LoginnedComp.vue"
import EmbedEditor from "@/components/EmbedComp.vue"
function isloggined(){
  addEventListener("storage",()=>{
    window.location.reload();
  });
      var ele = localStorage.getItem("token");
      if(ele!==null)
        fetch(config.api+"/verify",{
          headers:{
            "Authorization":ele
          }
        })
        .then(async response=>{
          var json = await response.json()
          this.$data.is=json.auth;
        })
        .catch(()=>{
          this.$data.is=false;
        })
      else
        this.$data.is = false;
    }
export default {
  name: 'HomeView',
  components: {
    LoadingComp,
    NonLoggined,
    LogginedComp,
    EmbedEditor
  },
  data(){
    return{
      is:false,
      plain:true
    }
  },
  methods:{
    isloggined:isloggined
  },
  mounted(){
    isloggined.call(this)
  }
}
</script>
<style>
  #change_button{
    right:30%;
    position:relative;
    height:100%;
    width:100px;
    background-color:rgb(22,22,22);
    border:0px;
    border-bottom: 5px solid black;
    color:white;
    font-size:22px;
  }
  #change_button:hover{
    border-bottom: 5px solid aqua;
  }
</style>
