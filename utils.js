const handleResponse = (res) => (statusCode, payload) => {
  statusCode = typeof statusCode === "number" ? statusCode : 200;
  console.log(payload);
  payload = typeof payload === "object" ? payload : {};
  const payloadString = JSON.stringify(payload);
  res.setHeader("Content-Type", "application/json");
  res.writeHead(statusCode);
  res.end(payloadString);
};

const handleRequest = (requestPayload) => () => {
  const {
    res,
    router,
    trimedPath,
    buffer,
    queryStringObject,
    headers,
    method,
  } = requestPayload;
  const handler =
    typeof router[trimedPath] !== "undefined"
      ? router[trimedPath]
      : router.notFound;
  const data = {
    trimedPath,
    queryStringObject,
    method,
    headers,
    payload: buffer,
  };
  handler(data, handleResponse(res));
};

module.exports = {
  handleResponse,
  handleRequest,
};
