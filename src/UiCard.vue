<template>
    <div class="ui-card" :class="classes">
        <slot name="breadcrumbs">

        </slot>

        <h3 v-html="title" v-if="type === 'default'"></h3>
        <h4 v-html="title" v-if="type === 'small'"></h4>

        <slot name="content"></slot>
    </div>
</template>

<style lang="scss">
    @import './styles/imports';

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: inherit;
        font-weight: 400;
        line-height: 1.1;
        color: inherit;
    }

    .ui-card {
        overflow: hidden;
        background: $md-grey-50;

        animation-delay: 3s;
        -webkit-animation: slideFromBottom 1s forwards;

        h3, h4 {
            margin: 0;
            color: $nucleus-black;
            line-height: 1.2em;
            font-weight: 300;
        }

        h3 {
            font-size: 1.75rem;
        }

        h4 {
            font-size: 1.5rem;

        }


        &__divider {
            width: 100%;
            height: 1px;
            margin: 12px auto 6px;
            background: #d8d8d8;

            &:first-of-type {
                margin: 0 auto 12px;
            }

            &:last-of-type {
                margin: 12px auto 0;
            }

            @media only screen and (min-width: 768px) {
                margin: 12px auto 6px;
            }
        }

        &--type-default {
            width: calc(100% - 20px);
            padding: 16px 20px 18px;

            @media only screen and (min-width: 768px) {
                max-width: 430px;
                padding: 32px 32px 30px 40px;
            }
        }

        &--type-small {
            width: calc(100% - 20px);
            padding: 16px 20px 18px;

            @media only screen and (min-width: 768px) {
                max-width: 320px;
                padding: 32px 40px 30px;
            }
        }

        &.is-raised {
            border: none;
            box-shadow: $shadow-raised;
        }
    }
</style>

<script>

    export default {
        name: 'ui-card',

        props: {
            type: {
                type: String,
                default: 'default' // 'default', 'small'.... more to come
            },
            raised: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: ''
            }
        },

        computed: {
            classes() {
                return [
                    `ui-card--type-${this.type}`,
                    { 'is-raised': this.raised }
                ];
            }
        },
        methods: {
            dismissAlert() {
                this.$emit('dismiss');
            }
        },

        components: {

        }
    };
</script>
