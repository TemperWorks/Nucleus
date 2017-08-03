<template>
    <aside class="nucleus-docs-sidebar">
        <div class="nucleus-docs-sidebar__header">
            <span class="nucleus-docs-sidebar__header-brand">Nucleus UI Kit</span>

            <a
                class="nucleus-docs-sidebar__header-version"
                href="https://github.com/temperworks/Nucleus-UI-Kit/releases/tag/v0.0.1"
                rel="noopener"
                target="_blank"
                title="View release notes"
            >v0.0.1</a>

            <a
                class="nucleus-docs-sidebar__header-github-link"
                href="https://github.com/temperworks/Nucleus-UI-Kit"
                rel="noopener"
                target="_blank"
                title="View on Github"
            >
                <ui-icon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M8 .198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.47 7.59.4.075.548-.173.548-.384 0-.19-.008-.82-.01-1.49-2.227.485-2.696-.943-2.696-.943-.364-.924-.888-1.17-.888-1.17-.726-.497.055-.486.055-.486.802.056 1.225.824 1.225.824.714 1.223 1.872.87 2.328.665.072-.517.28-.87.508-1.07-1.776-.202-3.644-.888-3.644-3.954 0-.874.313-1.588.824-2.148-.083-.202-.357-1.015.077-2.117 0 0 .672-.215 2.2.82.64-.177 1.323-.266 2.003-.27.68.004 1.365.093 2.004.27 1.527-1.035 2.198-.82 2.198-.82.435 1.102.162 1.916.08 2.117.512.56.822 1.274.822 2.147 0 3.072-1.872 3.748-3.653 3.946.288.248.544.735.544 1.48 0 1.07-.01 1.933-.01 2.196 0 .213.145.462.55.384 3.178-1.06 5.467-4.057 5.467-7.59 0-4.418-3.58-8-8-8z"/></svg>
                </ui-icon>
            </a>
        </div>

        <div class="nucleus-docs-sidebar__scrollable">
            <div class="nucleus-docs-sidebar__description">
                <p>A delightful collection of UI components we use at Temper written with Vue, inspired by Material Design.</p>
                <p>Created by <a rel="noopener" target="_blank" href="https://temper.works">Temper</a>.</p>
            </div>

            <div class="nucleus-docs-sidebar__version-select">
                <ui-select
                    :options="['0.8.9', '1.0.0']"
                    @select="onVersionSelect"
                    v-model="version"
                >Version</ui-select>
            </div>

            <ul class="nucleus-docs-sidebar__menu">
                <li class="nucleus-docs-sidebar__menu-section">
                    <div class="nucleus-docs-sidebar__menu-section-header">Usage</div>

                    <ul class="nucleus-docs-sidebar__menu-section-links">
                        <li>
                            <a
                                class="nucleus-docs-sidebar__menu-item"
                                href="https://github.com/temperworks/Nucleus-UI-Kit/tree/master#nucleus-ui-kit"
                                rel="noopener"
                                target="_blank"
                            >Getting Started <ui-icon>open_in_new</ui-icon></a>
                        </li>

                        <li>
                            <a
                                class="nucleus-docs-sidebar__menu-item"
                                href="https://github.com/temperworks/Nucleus-UI-Kit/blob/master/docs/Customization.md#customization"
                                rel="noopener"
                                target="_blank"
                            >Customization <ui-icon>open_in_new</ui-icon></a>
                        </li>
                    </ul>
                </li>

                <li class="nucleus-docs-sidebar__menu-section" v-for="section in menu">
                    <div class="nucleus-docs-sidebar__menu-section-header">{{ section.title }}</div>

                    <ul class="nucleus-docs-sidebar__menu-section-links">
                        <li v-for="item in section.menu">
                            <router-link
                                class="nucleus-docs-sidebar__menu-item" exact
                                :to="item.path"
                            >
                                {{ item.title }}
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script>
import Routes from './routes.js';
import UiIcon from 'src/UiIcon.vue';
import UiSelect from 'src/UiSelect.vue';

export default {
    data() {
        return {
            version: '1.0.0',
            menu: Routes.menu
        };
    },

    methods: {
        onVersionSelect(version) {
            if (version === '1.0.0') {
                return;
            }

            let root = '';
            const component = window.location.hash + (version === '0.8.9' ? '-docs' : '');

            if (window.location.hostname === 'temperworks.github.io') {
                root = 'https://temperworks.github.io/Nucleus-UI-Kit';
            }

            window.location = `${root}/${version}/${component}`;
        }
    },

    components: {
        UiIcon,
        UiSelect
    }
};
</script>
