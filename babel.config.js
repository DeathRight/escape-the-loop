module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          extensions: [
            ".js",
            ".ios.js",
            ".android.js",
            ".ts",
            ".ios.ts",
            ".android.ts",
            ".jsx",
            ".ios.jsx",
            ".android.jsx",
            ".tsx",
            ".ios.tsx",
            ".android.tsx",
            ".json",
          ],
          alias: {
            "@util": ["./src/util"],
            "@components": ["./src/components"],
            "@hooks": ["./src/hooks"],
            "@contexts": ["./src/contexts"],
            "@stitchesUtil": ["./stitches/colorUtil"],
            "@stitchesConfig": ["./stitches.config.ts"],
          },
        },
      ],
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
    ],
  };
};
