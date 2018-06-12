const express = require('express');
const itemRouter = express.Router();
const itemController = require('../controllers/itemController');

const { index }  = itemController();

itemRouter.get('/', index);

module.exports = itemRouter;