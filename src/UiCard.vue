<template>
    <div class="ui-card" :class="classes">
        <slot name="breadcrumbs">

        </slot>

        <slot name="content">

        </slot>
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
        font-weight: 300;
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
            line-height: 1.2em;
        }

        &__title {
            font-size: 1.75rem;
            a {
                &:hover {
                    text-decoration: none;
                }
                font-weight: 700;
            }
        }

        &__subtitle {
            line-height: 1.4em;
            font-weight: 400;
            font-size: 1.125rem;
        }

        &__divider {
            width: 100%;
            height: 1px;
            margin: 12px auto;
            background: #d8d8d8;
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
    import Vue from 'vue'

    export default {
        Components: {
            Title: {
                template: `
                    <h3 class="ui-card__title"><slot></slot></h3>
                `
            },
            Subtitle: {
                template: `
                    <h4 class="ui-card__subtitle"><slot></slot></h4>
                `
            },
            Divider: {
                template: `
                    <div class="ui-card__divider"></div>
                `
            }
        },
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
            },
            subtitle: {
                type: String,
                default: null
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
    }
</script>
