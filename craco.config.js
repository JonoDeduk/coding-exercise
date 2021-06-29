const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@setupTest': path.resolve(__dirname, 'src/setupTests.js'),
      '@components': path.resolve(__dirname, 'src/app/components'),
      '@pages': path.resolve(__dirname, 'src/app/pages'),
      '@constants': path.resolve(__dirname, 'src/app/constants'),
      '@redux': path.resolve(__dirname, 'src/app/redux'),
    },
  },
};
