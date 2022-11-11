const { ModuleFederationPlugin } = require("webpack").container;

const deps = require('./package.json').dependencies;

module.exports = () => ({
  webpack: {
    configure: {
      output: {
        publicPath: "http://localhost:8081/"
      }
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: 'ruiApp',
          filename: 'remoteEntry.js',
          remotes: {
            compose: 'composeGlow@http://localhost:3000/remoteEntry.js'
          },
          shared: {
            ...deps,
            react: {
              singleton: true,
              requiredVersion: deps.react
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"]
            }
          }
        })
      ]
    }
  }
})
