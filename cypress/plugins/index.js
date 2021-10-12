/// <reference types="cypress" />

const injectDevServer = require('@cypress/react/plugins/next')

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
	injectDevServer(on, config)
	// `on` is used to hook into various events Cypress emits
	// `config` is the resolved Cypress config

	return config
}
