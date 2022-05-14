const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssWebpackPlugin = require("mini-css-extract-plugin");

module.exports = (env = {}) => {
  const { mode = "development" } = env;
  const isProd = mode === "production";
  const isDev = mode === "development";
  const title = isDev ? "Test Build" : "Prod Build";
  // const buildTime = isDev? 'Built at:' + new Date().toISOString() : ''
  const buildTime = isDev ? "" : "";

  const getStyleLoaders = () => {
    return [
      isProd ? MiniCssWebpackPlugin.loader : "style-loader",
      "css-loader"
    ];
  };

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        title: title,
        buildTime: buildTime,
        template: "public/index.html"
      })
    ];
    if (isProd) {
      const cssMinPlugin = new MiniCssWebpackPlugin({
        filename: "main-[hash:8].css"
      });
      plugins.push(cssMinPlugin);
    }
    return plugins;
  };

  return {
    entry: "./src/index.js",
    mode: isProd ? "production" : isDev && "development",
    devtool: "source-map",//отключить на проде
    output: {
      filename: isProd ? "main-[hash:8].js" : undefined,
      publicPath: "/"
    },
    module: {
      rules: [
        //Loading js Babel
        {
          test: /\.(js|jsx)/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        //Loading css
        {
          test: /\.(css)$/,
          use: getStyleLoaders()
        },
        // //Loading SCSS/SASS
        {
          test: /\.s[ca]ss$/i,
          use: [...getStyleLoaders(), 'sass-loader']
        },
        //Loading Images
        {
          test: /\.(png|jpeg|jpg|gif|ico)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "images",
                name: "[name]-[sha1:hash:7].[ext]"
              }
            }
          ]
        },
        //Loading Fonts
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "fonts",
                name: "[name].[ext]"
              }
            }
          ]
        },

      ]
    },
    plugins: getPlugins(),
    devServer: {
      open: true,
      historyApiFallback: true
      // port: 9001
    }
  };
};
