module.exports = (config) => {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif|mp4)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
          ],
        },
      ];
    }
  }
  return config;
};
