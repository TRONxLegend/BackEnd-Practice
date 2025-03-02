const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url !== "/") {
        res.writeHead(404, { "Content-Type": "text/plain" });
        return res.end("404 Not Found");
    }

    const fileStream = fs.createReadStream('file.txt');

    fileStream.on('error', (err) => {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error: Could not read file.");
    });

    res.writeHead(200, { "Content-Type": "text/plain" });
    fileStream.pipe(res); // Pipe stream to response
});

server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000/");
});
