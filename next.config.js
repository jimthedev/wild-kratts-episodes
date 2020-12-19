module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      config.module.rules.push(
        {
            test: /\.csv$/,
            loader: 'csv-loader',
            options: {
              dynamicTyping: true,
              header: true,
              skipEmptyLines: true
            }
          }
      )
  
      // Important: return the modified config
      return config
    },
  }

// const config = {
//     module: {
//       rules: [
//         {
//           test: /\.csv$/,
//           loader: 'csv-loader',
//           options: {
//             dynamicTyping: true,
//             header: true,
//             skipEmptyLines: true
//           }
//         }
//       ]
//     }
//   };