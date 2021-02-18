const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

/**
 * POST INCANTATION
 * 
 * DESCRIPTION:
 */
router.post('/', (req, res) => {
  const shopItem = req.body;
  console.log('req.body', req.body);
  const sqlText = `INSERT INTO "shopping_list" ("name", "quantity", "unit")
                    VALUES ($1, $2, $3);`;
  pool.query(sqlText, [shopItem.name, shopItem.quantity, shopItem.unit])
    .then(() => {
      console.log('POST shopItems to the database', shopItem);
      res.sendStatus(200);
    }).catch((error) => {
      console.log('POST route error', error);
      sendStatus(500);
    })
}) 

/** /list 
 * 
 * GET ROUTE at /list 
*/
router.get('/', (req, res) => {
  console.log('GET inside /list')
  const sqlText = 'SELECT * FROM "shopping_list" ORDER BY "name" ASC';

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