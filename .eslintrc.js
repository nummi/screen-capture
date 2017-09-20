module.exports = {
"env": {
    "es6": true,
    "node": true
},
"extends": "eslint:recommended",
"plugins": ["async-await"],
"rules": {
    "async-await/space-after-async": 2,
    "async-await/space-after-await": 2,
    "indent": [
        "error",
        2
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
        "always"
    ]
}
};