import 'helpers/modality'
// eslint-disable-next-line no-unused-vars
import prism from 'prismjs'
import Nucleus from '../dist/nucleus-ui-kit'

import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Routes from './routes.js'

// Allow inspection, even in production mode
Vue.config.devtools = true

Vue.use(VueRouter)
Vue.use(Nucleus)

const router = new VueRouter({
    routes: Routes.routes,
    linkActiveClass: 'is-active'
})

const app = new Vue({
    router,
    render (h) {
        return h(App)
    },
    mounted () {
        console.log(this.$nucleus)
    }
})

app.$mount('#app')
