const http = require("http");
const fs = require("fs");

const PORT = 3000;

const home = fs.readFileSync("./index.html", "utf-8");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end(home);
  }

  if (request.url === "/about") {
    response.end("Hello , About");
  }

  if (request.url === "/contact") {
    response.end("Hello , Contact");
  }

  if (request.url === "/Service") {
    response.end("Hello , Service");
  }
});

server.listen(PORT, () => {
  console.log(`Server working on http://localhost:${PORT}`);
});
