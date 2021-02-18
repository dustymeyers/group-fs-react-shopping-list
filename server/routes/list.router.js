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

module.exports = router;