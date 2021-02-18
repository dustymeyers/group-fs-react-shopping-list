function ShoppingList({
  shoppingList, 
  updateItemFromList, 
  deleteItemFromList}) {
  return(
    <ul>
      {shoppingList.map(item => {
        return (
          <li key={item.id}>
            <div>{item.name}</div>
            <div>{item.quantity} {item.unit}</div>
            <div>
              <button key={item.id} onClick={updateItemFromList}>Buy</button>
              <button key={item.id} onClick={deleteItemFromList}>Remove</button> 
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ShoppingList;