/* 
  *
  *Title: Routes
  * Description: route configuration
  * Author: Siam Al Islam
  * Date: 2025-02-24
  * 
 */

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandlers');

// module scaffolding
const routes = {
    'sample': sampleHandler,
};

module.exports = routes;