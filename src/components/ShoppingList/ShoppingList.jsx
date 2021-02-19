import ListItemButtons from '../ListItemButtons/ListItemButtons';

function ShoppingList({
  shoppingList, 
  updateItemFromList, 
  deleteItemFromList}) {
  
  

    return(
    <ul>
      {shoppingList.map(item => {
        return (
          <li className={item.purchased ? "itemContainer purchased" : "itemContainer"} key={item.id}>
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

 // {item.purchased 
          // ? <li className="itemContainer purchased" key={item.id}>
          // : <li className="itemContainer" key={item.id}>}