/** @type {import('next').NextConfig} */
export function webpack(config) {
  config.module.rules.push({
    test: /\.(mp4|webm)$/,
    use: {
      loader: "file-loader",
      options: {
        publicPath: "/_next",
        name: "static/videos/[name].[hash].[ext]",
      },
    },
  });

  return config;
}

export default nextConfig;
