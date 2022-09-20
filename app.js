const http = require('http');
const hostname = "localhost";
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    switch(req.url){
        case "/home":
            res.writeHead(200);
            res.end("<h1>Home</h1>");
            break;
        case "/about":
            res.writeHead(200);
            res.end("<h1>About</h1>");
            break;
        default:
            res.end("<h1>Hello word</h1><p>Wellcome to my frisr JS</p>");
            break;
    }
});
server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
