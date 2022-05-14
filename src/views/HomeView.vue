<template>
<div id="head"><LoadingComp v-if="!is"/></div>
  <div class="home">
    <NonLoggined v-if="!is"/>
    <LogginedComp v-if="is"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoadingComp from "@/components/LoadingComp.vue"
import config from '../config.json'
import NonLoggined from "@/components/NonLoginned.vue"
import LogginedComp from "@/components/LoginnedComp.vue"
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
    LogginedComp
  },
  data(){
    return{
      is:false
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
