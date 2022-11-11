const { ModuleFederationPlugin } = require("webpack").container;
const { MFLiveReloadPlugin } = require('@module-federation/fmr')
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
        new MFLiveReloadPlugin({
          port: 8081, // the port your app runs on
          container: "ruiApp", // the name of your app, must be unique
          standalone: false, // false uses chrome extention
        }),
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
