const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
    res.writeHead(500)
    res.end('Server')
});

const PORT = process.env.port || 5000;

server.listen(5000, () => console.log("Server running on...." + PORT));
