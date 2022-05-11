<template>
<router-view/>
</template>
<style lang="scss">
body{
  background-color:rgb(44, 39, 39);
  margin:0px;
}
#head{
  background-color: rgb(22, 22, 22);
  margin:0px;
  margin-bottom: 70px;
  width:100%;
  height: 70px;
  z-index:2021;
  box-shadow:  20px 15px 20px 16px black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  top:0%;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
