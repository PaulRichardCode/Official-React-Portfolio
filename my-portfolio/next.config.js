module.exports = {
  reactStrictMode: true,
  // Enable support for ECMAScript modules
  experimental: {
    esmExternals: true,
  },
  module: {
    rules: [{ test: /\.txt$/, use: "raw-loader" }],
  },
};
