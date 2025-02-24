/* Title: Uptime Monitoring Application
 * Description: A RESTful API to monitor up or down time of user defined links
 * Author: Siam Al Islam
 * Date: 2025-02-24
 */

// Dependencies
const http = require('http');

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
    // Response handle
    res.end('Hello Programmer!');
};

// Start the server
app.createServer();