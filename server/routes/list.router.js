const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...


/** /list 
 * 
 * GET ROUTE at /list 
*/
router.get('/', (req, res) => {
  console.log('GET inside /list')
  const sqlText = 'SELECT * FROM "shopping_list"';

  pool.query(sqlText)
        .then((result) => {
            console.log(`Got back stuff from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
}) // end GET

router.delete('/:id', (req, res) => {
  console.log('DELETE inside /list')
  console.log('req.params.id', req.params.id);
  
  const itemId = req.params.id;
  const sqlText = 'DELETE FROM "shopping_list" WHERE "id"=$1';

  pool.query(sqlText, [itemId])
        .then((result) => {
            console.log(`Deleted an item from shopping_list`, result);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

module.exports = router;