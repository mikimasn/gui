import { createApp } from 'vue'
import {createStore} from 'vuex'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
const store = createStore({
    state () {
      return {
        count: 0
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })
createApp(App).use(router).use(store).mount('#app')
