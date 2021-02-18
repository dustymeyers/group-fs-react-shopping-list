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
              <button onClick={updateItemFromList}>Buy</button>
              <button onClick={deleteItemFromList}>Remove</button> 
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ShoppingList;