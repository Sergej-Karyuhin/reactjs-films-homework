module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true
    },
    plugins: ["react"],
    extends: "airbnb",
    parser: "babel-eslint",
    globals: {
        jest: "readonly",
        test: "readonly",
        expect: "readonly",
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    rules: {
      "linebreak-style": 0,
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    }
};
