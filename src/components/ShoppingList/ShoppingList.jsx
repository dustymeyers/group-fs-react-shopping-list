function ShoppingList({shoppingList}) {
  return(
    <ul>
      {shoppingList.map(item => {
        return (
          <li key={item.id}>
            <div>{item.name}</div>
            <div>{item.quantity} {item.unit}</div>
            <div>
              <button>Buy</button>
              <button>Remove</button> 
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ShoppingList;