import UiTheme from './UiTheme.vue'

export default function install (Vue) {
    Vue.nucleus = new Vue({
        data: {
            installedTheme: 'default'
        },
        watch: {
            // styles() {
            //     this.refreshInjectedStyles();
            // }
        },
        methods: {

        }
    })

    Vue.component('ui-theme', UiTheme)

    Vue.prototype.$nucleus = Vue.nucleus
}
