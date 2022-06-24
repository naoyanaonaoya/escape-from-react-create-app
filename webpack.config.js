const path = require("path");

module.exports = {
  // production
  // development
  // none
  mode: "development",

  // 起点にするファイルの選択
  entry: "./src/index.tsx",

  // バンドルしたファイルの出力先
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js",
  },

  // Loaderの設定を行うプロパティ
  module: {
    rules: [
      {
        // typescriptのLoader
        // testは正規表現で拡張子を書く
        test: /\.(ts|tsx)$/,
        // testに対して何を使うか
        // 下から順番に実行される
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/preset-env", "@babel/react"] },
          },
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "tsconfig.json"),
            },
          },
        ],
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },

  // webpack-dev-serverの設定を行うプロパティ
  devServer: {
    static: {
      //devServer.static.directoryにはサーバーの起点となるディレクトリを書く
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
  },

  // resolveはインポート時のパスの問題(絶対パスや相対パス)を解決するプロパティ
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },

  // targetはサーバー側とブラウザ側のどちらにコンパイルするかを設定するプロパティ
  target: "web",
};
