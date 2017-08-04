<template>
    <span class="ui-breadcrumb">
        <a :href="item.url">{{ item.title }}</a>
        <span class="ui-breadcrumb__arrow">›</span>
    </span>
</template>

<style lang="scss">
    @import './styles/imports';

    .ui-breadcrumb {
        padding: 0 3px;

        a {
            color: $nucleus-black;
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
            item: {
                type: Object,
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
