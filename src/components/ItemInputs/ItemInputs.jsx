import React, { useEffect, useState } from 'react';

function ItemInputs() {

  const [newItem, setNewItem] = useState('');
  const [newQuantity, setNewQuantity] = useState(0);
  const [newUnit, setNewUnit] = useState('');

  // onSubmit={handleSubmit}
  return (
    <>
      <h3>Add an Item</h3>
      <form >
        <label htmlFor="itemInput">Item:</label>
        <input 
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
          type="text" id="itemInput"></input>

        <label htmlFor="quantityInput">Quantity:</label>
        <input 
          onChange={(e) => setNewQuantity(e.target.value)}
          value={newQuantity}
          type="number" id="quantityInput"/>

        <label htmlFor="unitInput">Unit:</label>
        <input 
          onChange={(e) => setNewUnit(e.target.value)}
          value={newUnit}
          type="text" 
          id="unitInput"/>
        <input type="submit" value="Add"/>
      </form>
    </>
  )
}

export default ItemInputs;