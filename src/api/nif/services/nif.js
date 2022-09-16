'use strict';

/**
 * nif service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nif.nif');
