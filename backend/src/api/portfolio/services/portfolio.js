'use strict';

/**
 * portfolio service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::portfolio.portfolio');
