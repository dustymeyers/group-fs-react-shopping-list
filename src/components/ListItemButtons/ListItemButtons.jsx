function ListItemButtons({
  item, 
  updateItemFromList, 
  deleteItemFromList}) {
  return (
    <div>
      <button onClick={() => updateItemFromList(item.id)}>Buy</button>
      <button onClick={() => deleteItemFromList(item.id)}>Remove</button> 
    </div>
  )
}

export default ListItemButtons;