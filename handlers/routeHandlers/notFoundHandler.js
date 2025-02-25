/* 
  *
  *Title: Not Found Handler
  * Description: 404 Not Found Handler
  * Author: Siam Al Islam
  * Date: 2025-02-24
  * 
 */

const handler = require("./sampleHandlers");

// module scaffolding
const notFoundHandler = {};

handler.notFoundHandler = () => {
    console.log('Not Found');
};

module.exports = handler;