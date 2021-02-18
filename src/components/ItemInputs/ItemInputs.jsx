import React, { useEffect, useState } from 'react';

function ItemInputs({
  handleSubmit, 
  newItemName, 
  setNewItemName, 
  newQuantity, 
  setNewQuantity, 
  newUnit, 
  setNewUnit}) {

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