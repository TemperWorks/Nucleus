<template>
    <div class="ui-breadcrumb">
        <a v-for="breadcrumb in items" :href="breadcrumb.url">{{ breadcrumb.title }}</a>
        <span class="ui-breadcrumb__arrow">›</span>
    </div>
</template>

<style lang="scss">
    @import './styles/imports';

    .ui-breadcrumb {
        -webkit-animation: slideFromBottom 1s forwards;

        a {
            color: $md-grey-800;
            margin: 4px 0 15px;
            font-size: .9375rem;
            cursor: pointer;
            outline: none;
            text-decoration: none;

            &:hover {
                color: $brand-primary-color;
            }
        }

        &__arrow {
            font-size: 1rem;
            padding: 0 1px;
        }

        &--type-default {

        }
    }
</style>

<script>
    export default {
        name: 'ui-breadcrumb',

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
                    `ui-breadcrumb--type-${this.type}`
                ];
            }
        },

        methods: {
        },

        components: {

        }
    };
</script>
