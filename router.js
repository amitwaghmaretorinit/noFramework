const  handlers = require("./handlers");

const router = {
  getuser: handlers.getUser,
  notFound: handlers.notFound,
};

module.exports = router;
