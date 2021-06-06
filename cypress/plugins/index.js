const injectCraDevServer = require('@cypress/react/plugins/react-scripts');
const mdPreprocessor = require('./mdPreprocessor');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  injectCraDevServer(on, { ...config, addTranspiledFolders: ['.storybook'] });
  on('file:preprocessor', mdPreprocessor);

  return config;
};
