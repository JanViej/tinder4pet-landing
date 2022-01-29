// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const path = require('path');
const UnusedWebpackPlugin = require('unused-webpack-plugin');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const withPlugins = require('next-compose-plugins');
const { i18n } = require('./next-i18next.config');
const TerserPlugin = require('terser-webpack-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withAntdLess = require('next-plugin-antd-less')({
  lessVarsFilePathAppendToEndOfContent: true,
  lessVarsFilePath: './src/styles/variables.less',
});

const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [],
  },
  i18n,
  compress: true,
  // experimental: { esmExternals: true },
  webpack: (config, { isServer, dev }) => {
    // eslint-disable-next-line
    config.plugins = config.plugins || [];
    config.plugins.push(
      new UnusedWebpackPlugin({
        // Source directories
        directories: [path.join(__dirname)],
        // Exclude patterns
        exclude: ['node_modules', 'public'],
        // Root directory (optional)
        root: __dirname,
      }),
    );
    // eslint-disable-next-line
    config.resolve.alias.link = path.resolve(
      __dirname,
      '.',
      'node_modules',
      'next',
      'link',
    );
    // eslint-disable-next-line
    config.resolve.alias.image = path.resolve(
      __dirname,
      '.',
      'components',
      'Image.js',
    );
    if (isServer && !dev) {
      // eslint-disable-next-line
      config.optimization = {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            parallel: true,
            cache: true,
            terserOptions: {
              output: { comments: false },
              mangle: true,
              compress: true,
            },
            extractComments: false,
          }),
        ],
      };
    }

    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    });
    config.resolve.modules.push(path.resolve('.'));
    // config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
    config.plugins.push(new AntdDayjsWebpackPlugin());
    return config;
  },
};

module.exports = withPlugins([withAntdLess, withBundleAnalyzer], nextConfig);
