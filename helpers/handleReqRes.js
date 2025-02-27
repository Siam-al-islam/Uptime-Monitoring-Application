/* 
  *
  *Title: Handle Request Response
  * Description: A RESTful API to monitor up or down time of user defined links
  * Author: Siam Al Islam
  * Date: 2025-02-24
  * 
 */

// Dependencies
const { StringDecoder } = require('string_decoder');
const url = require('url');
const routes = require('../routes');
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandler');

//Module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
    // Request handle
    // get the url and parse it
    const parserUrl = url.parse(req.url, true);
    const path = parserUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parserUrl.query;
    const headersObject = req.headers;

    const requestProperties = {
        parserUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    };

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);

        // Response handle
        res.end('Hello world!');
    })
};

module.exports = handler;