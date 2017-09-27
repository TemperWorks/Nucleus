<template>
    <div class="ui-breadcrumb-container">
        <ui-breadcrumb v-for="breadcrumb in items" :item="breadcrumb">

        </ui-breadcrumb>
    </div>
</template>

<style lang="scss" type="text/scss">
    @import './styles/imports';

    .ui-breadcrumb-container {
        margin: 4px 0 15px;
        &--type-default {

        }
    }
</style>

<script>
    import UiBreadcrumb from './UiBreadcrumb.vue'

    export default {
        name: 'ui-breadcrumb-container',

        props: {
            items: {
                type: Array,
                default: [],
                required: true
            }
        },

        computed: {
            classes() {
                return [
                    `ui-breadcrumb-container--type-${this.type}`
                ];
            }
        },

        methods: {
        },

        components: {
            UiBreadcrumb
        }
    };
</script>
