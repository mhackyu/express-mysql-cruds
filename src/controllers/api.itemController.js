const connection = require('../config/db.config');

function itemController() {

  // this will display list of items available in database.
  function index(req, res) {
    // executing mysql select query.
    connection.query('SELECT * FROM items', function(error, results, fields) {
      // this will hold the data reponse
      let apiResult = {};
      if (error) {
        apiResult = {
          message: 'Error occured while getting list of item.',
          total: 0,
          data: []
        };
        res.status(500).send(apiResult);
      }
      apiResult = {
        message: 'Success',
        total: results.length,
        data: results
      };

      res.send(apiResult);
    });
  }

  // this will create a new item.
  function create(req, res) {
    // add validation kapag empty yung value sa req.body at kapag empty yung request.
    let data = {
      name: req.body.name,
      qty: req.body.qty,
      amount: req.body.amount
    };

    connection.query('INSERT INTO items SET ?', data, function(error, results) {
      if (error) {
        res.status(500).send({ message: 'Error occured while adding item.' });
      }
      // if sucess, add the ID of new item into data object.
      data.id = results.insertId;
      apiResult = {
        message: 'Successfully created.',
        total: results.length,
        data 
      };

      res.send(apiResult);
    });
  }

  // this will update item by id.
  function update(req, res) {
    let data = [
      req.body.name,
      req.body.qty,
      req.body.amount,
      req.params.id
    ];

    connection.query('UPDATE items SET name = ?, qty = ?, amount = ? WHERE id = ?', data , function(error, results) {
      if (error) {
        res.status(500).send({
          message: `Error occured while updating item with id ${req.params.id}`
        });
      }

      apiResult = {
        message: 'Successfully updated',
        data: {
          id: req.params.id,
          name: req.body.name,
          qty: req.body.qty,
          amount: req.body.amount
        }
      };

      res.send(apiResult);
    });
  }

  // this will delete item by id. 
  function remove(req, res) {
    connection.query('DELETE FROM items WHERE id = ?', req.params.id, function(error, results) {
      if (error) {
        res.status(404).send({ message: `Error occured while deleting item with id ${req.params.id}` });
      }

      res.send({ message: 'Successfully deleted' });
    });
  }

  // this will search for item by od
  function find(req, res) {
    connection.query('SELECT * FROM items WHERE id = ? ', req.params.id, function(error, results) {
      if (error) {
        res.status(404).send({ message: `Error occured while searching item with id: ${req.params.id}` });
      }

      apiResult = {
        message: 'Success',
        data: results
      };
      
      res.send(apiResult);
    });
  }

  return {
    index,
    create,
    update,
    remove,
    find
  };
}

module.exports = itemController;