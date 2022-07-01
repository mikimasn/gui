<template>
  <h1>Witamy!!</h1><br>
  <p>Poniżej Jest prosty embed editor</p>
  <div id="embededitor" :style="{'border-left-color':color}">
    <input  id="titleinput" class="embedinput" :style="cssVars" @keydown="event=>title=event.target.value" @blur=" event=>title=event.target.value" placeholder="Title"/>
    <input  id="colorinput" class="embedinput" :style="cssVars" @keydown="event=>color=event.target.value" @blur=" event=>color=event.target.value" placeholder="Color"/><br>
    <textarea class="embedinput" id="descinput" :style="cssVars" @keydown="event=>desc=event.target.value" @blur=" event=>desc=event.target.value" placeholder="Description"/><br>
    <div v-for="(item,index) in fields" :key="item" class="field">
      <input class="embedinput fieldinput fieldname" @keydown="event=>fields[index].name=event.target.value" @blur=" event=>fields[index].name=event.target.value" :value="item.name" placeholder="Name"/>
      <input class="embedinput fieldinput fielddesc" @keydown="event=>fields[index].value=event.target.value" @blur=" event=>fields[index].value=event.target.value" :value="item.value" placeholder="Description"/>
      <input class="fieldinline" @change="event=>fields[index].inline=event.target.value=='on'" type="checkbox" title="inline"/>
      <button class="fieldremove" @click="fields.splice(index,1)">x</button>
    </div>
    <button id="addfield" @click="fields.push({name:'',value:'',inline:true})">Add field</button>
  </div>
  <button id="wyslij" @click="updateloading()">Wyślij!</button>
</template>

<script>
import config from '../config.json'
export default {
  name: 'EmbedComp',
  props: {
  },
  data(){
    return {
      color:"#ffffff",
      title:"",
      desc:"",
      fields:[]
    }
  },
  methods:{
    updateloading(){
      var token = localStorage.getItem("token");
      if(this.title!=""&&this.desc!=""&&this.color!=""){
        var fie=[]
        this.fields.forEach(ele=>{
          fie.push(JSON.stringify(ele));
        })
        fetch(config.api+"/sendembed",{
          headers:{
            Authorization:token
          },
          body:new URLSearchParams({
            color:this.color,
            desc:this.desc,
            fields:fie,
            title:this.title
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
  },
  computed:{
    cssVars(){
      return {
        "--embedcolor":this.color
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
::placeholder{
  color:rgb(27, 27, 27)
}
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
#embededitor{
  width:700px;
  min-height: 500px;
  background-color:black;
  left:50%;
  position:relative;
  transform: translate(-50%,0);
  border-left-width: 10px;
  border-left-style: solid;
}
.embedinput{
  background-color:gray;
  border:0px;
  height: 20px;
  border-radius: 20px;
  padding: 10px;
  margin-top:20px;
}
#colorinput{
  position:relative;
  margin-left:20%;
}
#titleinput{
  width:300px;
  position:relative;
}
#descinput{
  width:600px;
  height: 100px;
}
.field{
  width:85%;
  margin-left:7.5%;
  position:relative;
  background-color: rgb(69, 69, 69);
}
.fieldinput{
  position:relative;
  margin-bottom: 15px;
}
.fieldname{
  width:150px;
  right:5%
}
.fielddesc{
  width:300px;
  right:3%;
}
.fieldremove{
  border:0px;
  background-color:transparent;
  position:absolute;
  right:0px;
  font-size:15px;
}
#addfield{
  height: 35px;
  width:250px;
  background-color: rgb(163, 162, 162);
  border:0px;
  font-size:20px;
  border-radius: 20px;
}
</style>
