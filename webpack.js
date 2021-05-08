const getWebpackConfig = require('@nrwl/react/plugins/webpack');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

function getCustomWebpackConfig(webpackConfig) {
  const config = getWebpackConfig(webpackConfig);
  const isProduction = webpackConfig.mode === 'production';

  if (!isProduction) {
    webpackConfig.devServer = {
      ...webpackConfig.devServer,
      liveReload: false,
      hot: true,
    };

    config.plugins.push(new ReactRefreshPlugin());
  }

  return config;
}

module.exports = getCustomWebpackConfig;
