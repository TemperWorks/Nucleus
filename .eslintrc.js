module.exports = {
    plugins: [
        'vue',
        "class-property",
        "html",
        "unicorn",
        "promise",
        "no-use-extend-native"
    ],
    "extends": 'vue',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    },
    "rules": {
        // Prefer spacing in inline object curlies: e.g. { curlies }
        'object-curly-spacing': ['error', 'always'],
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
};

