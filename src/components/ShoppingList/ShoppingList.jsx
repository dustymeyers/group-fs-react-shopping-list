import ListItemButtons from '../ListItemButtons/ListItemButtons';

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
            {item.purchased 
            ? <p>Purchased</p> 
            : <ListItemButtons
               item={item}
               updateItemFromList={updateItemFromList}
               deleteItemFromList={deleteItemFromList}/>}
          </li>
        );
      })}
    </ul>
  );
}

export default ShoppingList;