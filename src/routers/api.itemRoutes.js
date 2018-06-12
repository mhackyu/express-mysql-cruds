const express = require('express');
const itemRouter = express.Router();
const itemController = require('../controllers/api.itemController');

// function router() {
//   const { index, create } = itemController(); 

//   // item routes API
//   itemRouter.get('/', index);
//   itemRouter.post('/new', create);

//   return itemRouter;
// }

// module.exports = router;

const { index, create, update, remove, find } = itemController(); 

// item routes API
itemRouter.get('/', index);
itemRouter.post('/', create);
itemRouter.put('/:id', update);
itemRouter.delete('/:id', remove);
itemRouter.get('/:id', find);


module.exports = itemRouter;