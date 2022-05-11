<template>
  <h1>Witamy!!</h1><br>
  <p>Poniżej wpisz swoją wiadomość na #harmonogram tam gdzie chcesz wstawić wzmiankę wstaw __ping__ PAMIETAJ!! ŻADNE INNE WZMIANKI NIE ZADZIAŁAJĄ</p>
  <textarea name="content" id="pole" /><br>
  <button id="wyslij" @click="updateloading()">Wyślij!</button>
</template>

<script>
import config from '../config.json'
export default {
  name: 'LogginedComp',
  props: {
  },
  data(){
    return {
        interval:300,
        actual:0,
        text:"",
        max:3
    }
  },
  methods:{
    updateloading(){
      var token = localStorage.getItem("token")
      var data = document.getElementById("pole").value;
      if(data!==""){
        fetch(config.api+"/send",{
          headers:{
            Authorization:token
          },
          body:new URLSearchParams({
            content:data
          }),
          method:"POST"
        }).then(ele=>{
          if(ele.status==204){
            alert("Sukces!");
          }
        })
      }
      else
        alert("Musisz wpisać jakąś wiadomość")
    }
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#pole{
  width: 1200px;
  height: 300px;
  background-color:rgb(22, 22, 22);
  color:white;
}
#wyslij{
  background-color:aqua;
  width:100px;
  height: 50px;
  font-size:20px;
  border-radius:20px;
}
</style>
