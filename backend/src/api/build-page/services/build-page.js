'use strict';

/**
 * build-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::build-page.build-page');
