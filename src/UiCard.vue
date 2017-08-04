<template>
    <div class="ui-card" :class="classes">
        <slot>

        </slot>
    </div>
</template>

<style lang="scss">
    @import './styles/imports';

    .ui-card {
        overflow: hidden;
        background: $md-grey-50;

        .ui-breadcrumb {
            animation: slideFromBottom 1s forwards;
        }

        h3 {
            opacity: 0;
            animation-delay: .3s;

            a {
                color: $brand-primary-color;
                font-weight: 700;
            }
        }

        width: calc(100% - 20px);
        padding: 16px 20px 18px;

        @media only screen and (min-width: 768px) {
            max-width: 430px;
            padding: 32px 32px 30px 40px;
        }

        .divider {
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

        }

        &.is-raised {
            border: none;
            box-shadow: $shadow-raised;
        }
    }
</style>

<script>
//    import UiCloseButton from './UiCloseButton.vue';
//    import UiIcon from './UiIcon.vue';

    export default {
        name: 'ui-card',

        props: {
            type: {
                type: String,
                default: 'default' // 'default', .... more to come
            },
            raised: {
                type: Boolean,
                default: false
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
