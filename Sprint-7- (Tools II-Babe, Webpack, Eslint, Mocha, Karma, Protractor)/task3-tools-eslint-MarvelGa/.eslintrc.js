module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "indent": ["error", 4],
        "space-infix-ops": "error",
        "quotes": ["error", "single"],
        "no-var": "error",
        "prefer-const": "error",
        "eqeqeq": "error",
        "no-console": ["error", { allow: ["warn", "error"] }],
        "no-cond-assign": "error",
        "no-extra-semi": "error",
        "no-inline-comments": "error",
        "no-else-return": "error",
        "curly": "error"
    }
}
