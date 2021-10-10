const http = require("http");
const utils = require("./utils");
const { getRequestConfig } = require("./config");

const server = http.createServer((req, res) => {
  req.on("end", utils.handleRequest(getRequestConfig(req, res)));
});

server.listen(3000, () => {
  console.log("The server is listening on port 3000 now");
});
