<template>
  <h1>Loading {{text}}</h1>
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
      setInterval((()=>{
this.$data.actual++;
      if(this.$data.actual>this.$data.max){
        this.$data.text="";
        this.$data.actual=0
      }
      
      else
        this.$data.text+="."
      }),this.$data.interval);
      
    }
  },
  mounted(){
    this.updateloading()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
