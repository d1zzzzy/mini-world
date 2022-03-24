/** @type {import('next').NextConfig} */
const withLess = require("next-with-less");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withLess, withBundleAnalyzer], {
  cssModules: true,
  productionBrowserSourceMaps: true,
  compiler: {
    styledComponents: true
  },
});
