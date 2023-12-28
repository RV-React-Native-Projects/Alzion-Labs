module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@src": "./src",
            "@assets": "./src/assets",
            "@appConfig": "./app.json",
            "@config": "./Config.json",
            "@cards": "./src/cards",
            "@common": "./src/common",
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@helpers": "./src/helpers",
            "@hooks": "./src/hooks",
            "@navigation": "./src/navigation",
            "@screens_components": "./src/screens_components",
            "@screen": "./src/screen",
            "@services": "./src/services",
            "@features": "./src/services/features",
            "@global": "./src/services/global",
            "@redux": "./src/redux",
            "@reducer": "./src/redux/reducer",
          },
        },
      ],
      "react-native-paper/babel",
    ],
  };
};
