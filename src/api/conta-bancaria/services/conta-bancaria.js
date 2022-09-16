'use strict';

/**
 * conta-bancaria service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::conta-bancaria.conta-bancaria');
