'use strict';

/**
 * process-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::process-page.process-page');
