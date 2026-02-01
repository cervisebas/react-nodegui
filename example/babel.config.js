module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    ["@babel/preset-react", {
      "runtime": "automatic"
    }]
  ],
  plugins: [
    '@cervisebas/react-nodegui/babel-import-assets',
  ],
};
