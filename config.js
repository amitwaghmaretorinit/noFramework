const url = require("url");
const { StringDecoder } = require("string_decoder");
const router = require("./router");

const getRequestConfig = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const decoder = new StringDecoder("utf-8");
  let buffer = "";
  req.on("data", (data) => {
    buffer += decoder.write(data);
  });
  return {
    req,
    res,
    router,
    trimedPath: path.replace(/^\/+|\/+$/g, ""),
    buffer,
    queryStringObject: parsedUrl.query,
    headers: req.headers,
    method: req.method.toLowerCase(),
    path,
    parsedUrl,
  };
};
module.exports = { getRequestConfig };
