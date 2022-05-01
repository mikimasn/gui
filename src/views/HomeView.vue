<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <LoadingComp />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import LoadingComp from "@/components/LoadingComp.vue"

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    LoadingComp
  }
}
</script>
