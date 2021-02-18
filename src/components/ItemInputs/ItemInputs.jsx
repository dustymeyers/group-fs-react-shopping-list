import React, { useEffect, useState } from 'react';

function ItemInputs() {

  const [newItemName, setNewItemName] = useState('');
  const [newQuantity, setNewQuantity] = useState(0);
  const [newUnit, setNewUnit] = useState('');

  const [newItem, setNewItem] = useState({});

  const handleSubmit =(evt) => {
    evt.preventDefault();
    // put the item info in newItem
    setNewItem({
      item: newItemName,
      quantity: newQuantity,
      unit: newUnit
    });

    // shoppingList function - POST in App.jsx
    // shoppingList(newItem)
    
    // clear the inputs
    clearItemInputs();
  }

  const clearItemInputs = () => {
    setNewItemName('');
    setNewQuantity(0);
    setNewUnit('');
  }

  return (
    <>
      <h3>Add an Item</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemInput">Item:</label>
        <input 
          onChange={(e) => setNewItemName(e.target.value)}
          value={newItemName}
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