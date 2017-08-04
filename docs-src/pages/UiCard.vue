<template>
    <section class="page page--ui-card">
        <h2 class="page__title">UiCard</h2>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/TemperWorks/Nucleus/blob/master/src/UiCard.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <h4 class="page__demo-title">Basic</h4>

            <div class="page__demo-group">
                <ui-card>
                    <ui-breadcrumb :items="breadcrumbs">

                    </ui-breadcrumb>
                </ui-card>
            </div>

            <h4 class="page__demo-title">Color: accent</h4>

            <div class="page__demo-group">

            </div>
        </div>

        <h3 class="page__section-title">API</h3>

        <ui-tabs raised>
            <ui-tab title="Props">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                        </thead>

                        <tbody>

                        </tbody>
                    </table>
                </div>

                * Required prop
            </ui-tab>

            <ui-tab title="Slots">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>(default)</td>
                            <td>Holds the content of the card</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </ui-tab>

            <ui-tab title="Events">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                        </thead>

                        <tbody>

                        </tbody>
                    </table>
                </div>
            </ui-tab>
        </ui-tabs>
    </section>
</template>

<script>
    import UiBreadcrumb from 'src/UiBreadcrumb.vue';
    import UiCard from 'src/UiCard.vue';
    import UiTab from 'src/UiTab.vue';
    import UiTabs from 'src/UiTabs.vue';

    export default {
        data() {
            return {
                breadcrumbs: [
                    {
                        title: 'Home',
                        url: '#'
                    }
                ]
            }
        },

        components: {
            UiBreadcrumb,
            UiCard,
            UiTab,
            UiTabs
        }
    };
</script>

<style lang="scss">
    @import '~styles/imports';
</style>
