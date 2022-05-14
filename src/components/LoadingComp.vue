<template>
  <button id="login" @click="updateloading">Zaloguj</button>
</template>

<script>
export default {
  name: 'HelloWorld',
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
      window.open("https://discord.com/api/oauth2/authorize?client_id=973972548612132984&redirect_uri=https%3A%2F%2Fgp-harmonogram.herokuapp.com%2Flogin&response_type=code&scope=identify%20guilds.members.read","","width=500,height=800");
      
    }
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#login{
  background-color:aqua;
  border: 0px;
  width: 105px;
  height: 40px;
  font-size: 20px;
  color:black;
  border-radius: 20px;
  right:50px;
  margin-top:15px;
  position:absolute;
}
</style>
