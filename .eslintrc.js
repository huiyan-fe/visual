module.exports = {
    "extends": "airbnb-base",
    "plugins": [
        "import"
    ],
    "rules": {
        "indent": ["error", 4, { "SwitchCase": 1 }],
        'eol-last': ["error", "never"],
        'arrow-parens': ["error", "as-needed"],
    }
};