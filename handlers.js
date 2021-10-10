const handlers = {
  getUser: (req, res) => {
    res(406, [{ name: "amit" }]);
  },
  notFound: (req, res) => {
    res(404);
  },
};

module.exports = handlers;
