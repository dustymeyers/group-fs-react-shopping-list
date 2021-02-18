const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...


/** /list 
 * 
 * 
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
})

module.exports = router;