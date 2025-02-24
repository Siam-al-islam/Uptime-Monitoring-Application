/* 
  *
  *Title: Uptime Monitoring Application
  * Description: A RESTful API to monitor up or down time of user defined links
  * Author: Siam Al Islam
  * Date: 2025-02-24
  * 
 */

// Dependencies
const http = require('http');
const url = require('url');
const { StringDecoder } = require('string_decoder');

// app object - module scaffolding
const app = {};

// Configuration
app.config = {
    port: 3000,
};

// Create a server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Server is running on port ${app.config.port}`);
    });
}

// Handle requests and responses
app.handleReqRes = (req, res) => {
    // Request handle
    // get the url and parse it
    const parserUrl = url.parse(req.url, true);
    const path = parserUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parserUrl.query;
    const headersObject = req.headers;

    const decoder = new StringDecoder('utf-8');
    let realData = '';

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

// Start the server
app.createServer();