# Customization

## Sass customization

If you use Sass and a build system with [`vue-loader`](https://github.com/vuejs/vue-loader) or [`vueify`](https://github.com/vuejs/vueify) in your project, you can customize the components by overriding Sass variables and then importing the `.vue` source files.

The variables can be overridden using the `data` and `includePaths` options of `node-sass`, which can be set in your Webpack config if using Webpack or `vue.config.js` file if using Browserify.

In the `data` option we import our overriding variables file, which will be prepended to every Sass file processed by `node-sass`. The `includePaths` option allows us to specify where to look for files imported in `data`.

### Theming

You can customize the `primary` and `accent` theme colors using the `$brand-primary-color` and `$brand-accent-color` variables.

The following examples assume these files in your project:

`src/styles/variables.scss`:

```scss
$brand-primary-color: #673AB7;
$brand-accent-color: #FF4081;
```

`src/App.vue`:

```html
<template>
    <div>
        <ui-button color="primary">Primary button</ui-button>
        <ui-button color="accent">Accent button</ui-button>
    </div>
</template>

<script>
import 'nucleus-ui-kit/src/bootstrap'; // Required to setup Nucleus, should be imported only once in your project
import UiButton from 'nucleus-ui-kit/src/UiButton.vue';

export default {
    components: {
        UiButton
    }
}
</script>
```

#### Webpack 2.x example

Add the following to your Webpack config, at the top level:

```js
plugins: [
    new webpack.LoaderOptionsPlugin({
        options: {
            sassLoader: {
                data: '@import "src/styles/variables.scss";',
                includePaths: 'src/styles'
            },
            context: path.resolve(__dirname) // your project root
        }
    })
]
```

#### Webpack 1.x example

Add the following to your Webpack config, at the top level:

```js
sassLoader: {
    data: '@import "src/styles/variables.scss";',
    includePaths: 'src/styles'
}
```

#### Browserify example

Add the following to your [`vue.config.js`](https://github.com/vuejs/vueify#configuring-options) file, at the top level:

```js
sass: {
    data: '@import "src/styles/variables.scss";',
    includePaths: 'src/styles'
}
```

### Other variables

All other variables in [`nucleus-ui-kit/src/styles/variables.scss`](.../src/styles/variables.scss) can be overridden to customize other aspects of the components in the same manner as the examples above.

Some components also have component-specific variables that can be found in their source files. Those can be overridden as well.

## Component sizing

Nucleus components use the `rem` CSS unit for properties with length values (e.g. `font-size`, `margin`, `padding`, `width`, `height`, etc). This allows you to customize the size of all components by setting `font-size` on the root (`<html>`) element.

The default root font size is `100%`, which uses the browser's font size setting, typically `16px`.

To scale the size of components up, set a font size higher than `100%` on the root element, for example:

```css
html {
    font-size: 110%;
}
```

To scale the size of components down, set a font size lower than `100%` on the root element, for example:

```css
html {
    font-size: 90%;
}
```

## Global config

Some components have props that can be configured globally. The format of the config object and available options can be seen in [src/config.js](.../src/config.js).

### Using `window.NucleusConfig`

Set your global config options on `window.NucleusConfig` *before* importing Nucleus.

```js
import Vue from 'vue';

// Globally configure Nucleus
window.NucleusConfig = {
    disableRipple: true,
    UiAutocomplete: {
    	keys: {
    		label: 'name',
    		value: 'id',
    		image: 'picture'
    	}
    }
};

// Using `require()` and not `import` because `import` statements are hoisted
require('nucleus-ui-kit/dist/nucleus-ui-kit.min.css');
const NucleusUI = require('nucleus-ui-kit').default;
const App = require('path/to/App.vue'); // the root Vue instance

Vue.use(NucleusUI);

new Vue({
	el: '#app',
	render: h => h(App)
});
```

### Using `src/config.js`

> Note: this usage method only works if you are using [`vue-loader`](https://github.com/vuejs/vue-loader) or [`vueify`](https://github.com/vuejs/vueify) in your project and importing Nucleus from source (i.e. importing from `nucleus-ui-kit/src`).

Import `NucleusConfig` from `nucleus-ui-kit/src/config` and call `.set()` with your options *before* importing Nucleus.

```js
import Vue from 'vue';

// Using `require()` and not `import` because `import` statements are hoisted
const NucleusConfig = require('nucleus-ui-kit/src/config').default;

NucleusConfig.set({
    disableRipple: true,
    UiAutocomplete: {
    	keys: {
    		label: 'name',
    		value: 'id',
    		image: 'picture'
    	}
    }
});

const NucleusUI = require('nucleus-ui-kit/src').default;
const App = require('./App.vue'); // the root Vue instance

Vue.use(NucleusUI);

new Vue({
	el: '#app',
	render: h => h(App)
});
```
