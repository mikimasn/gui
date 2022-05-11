<template>
  <h1>Nie jesteś zalogowany</h1><br>
  <p>Niestety nie obsługujemy anonimowych osób ponieważ nie wiemy kim są</p><br>
  <p>Przedstaw się nam a może znajdziemy tutaj coś specjalnie dla ciebie</p>
</template>

<script>
import config from '../config.json'
export default {
  name: 'NonLoggined',
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
      window.open(config.oauth2,"","width=500,height=800");
      
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
