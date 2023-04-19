module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"],
    // Babel < 7.13.0
    plugins: [["@babel/plugin-proposal-class-properties", { loose: false }]],

    // Babel >= 7.13.0 (https://babeljs.io/docs/en/assumptions)
    plugins: [["@babel/plugin-proposal-class-properties"]],
    assumptions: {
      setPublicClassFields: false,
    },
  };
};
