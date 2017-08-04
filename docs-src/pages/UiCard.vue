<template>
    <section class="page page--ui-card">
        <h2 class="page__title">UiCard</h2>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/TemperWorks/Nucleus/blob/master/docs-src/pages/UiCard.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <h4 class="page__demo-title">Basic with navigation breadcrumbs</h4>

            <div class="page__demo-group">
                <ui-card title="3 shifts gevonden voor <a href='#'>Bartending</a> bij <a href='#'>Strandtent de Pit</a>">
                    <ui-breadcrumb-container :items="breadcrumbs" slot="breadcrumbs">

                    </ui-breadcrumb-container>

                    <template slot="content">
                        <card-title>3 shifts gevonden voor <a href='#'>Bartending</a> bij <a href='#'>Strandtent de Pit</a></card-title>
                    </template>
                </ui-card>
            </div>

            <h4 class="page__demo-title">Raised</h4>

            <div class="page__demo-group">
                <ui-card raised>
                    <ui-breadcrumb-container :items="breadcrumbs" slot="breadcrumbs">

                    </ui-breadcrumb-container>

                    <template slot="content">
                        <card-title>3 shifts gevonden voor <a href='#'>Bartending</a> bij <a href='#'>Strandtent de Pit</a></card-title>
                    </template>
                </ui-card>
            </div>

            <h4 class="page__demo-title">Small</h4>

            <div class="page__demo-group">
                <ui-card type="small">
                    <template slot="content">
                        <card-title>Strandtent de Pit</card-title>
                        <card-subtitle>Nieuwlandsedijk 20 <br/> 2691KW 's-Gravenzande</card-subtitle>
                        <card-divider></card-divider>
                        <card-subtitle>Footer example</card-subtitle>
                    </template>
                </ui-card>
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
                            <tr>
                                <td>type</td>
                                <td>string</td>
                                <td>default</td>
                                <td>Type of the card (default, small)</td>
                            </tr>
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
    import UiBreadcrumbContainer from 'src/UiBreadcrumbContainer.vue';
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
                    },
                    {
                        title: 'Bartending',
                        url: '#'
                    },
                    {
                        title: 'Strandtent de Pit',
                        url: '#'
                    }
                ]
            }
        },
        components: {
            UiBreadcrumbContainer,
            UiCard,
            UiTab,
            UiTabs,
            'card-title': UiCard.Components.Title,
            'card-subtitle': UiCard.Components.Subtitle,
            'card-divider': UiCard.Components.Divider
        }
    };
</script>

<style lang="scss">
    @import '~styles/imports';
</style>
