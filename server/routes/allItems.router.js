const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// // PUT ALL ROUTE
router.put('/', (req,res) => {
  console.log('PUT all items')
  console.log('req.params', req.params);

  const sqlText = `UPDATE "shopping_list" 
                    SET "purchased"=FALSE 
                    WHERE "purchased"=TRUE`;

  pool.query(sqlText)
        .then((result) => {
          console.log('Updated all items', result);
          res.sendStatus(200);
        })
        .catch((error) => {
          console.log('Error in PUT all', error);
          res.sendStatus(500);
        })
});

// DELETE ALL ROUTE
router.delete('/', (req, res) => {
  console.log('DELETE inside /list/clear');
  
  const sqlText = 'DELETE FROM "shopping_list";'

  pool.query(sqlText)
    .then(result => {
      console.log('Delete all items from shopping_list', result);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500); // Good server always responds
    })
});

module.exports = router;