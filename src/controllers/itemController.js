function itemController() {
  function index(req, res) {
    res.render('../views/items/index.ejs');
  }

  return {
    index
  }
}

module.exports = itemController;