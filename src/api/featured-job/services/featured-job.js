'use strict';

/**
 * featured-job service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::featured-job.featured-job');
