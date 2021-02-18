import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import './App.css';
import ItemInputs from '../ItemInputs/ItemInputs'
import ShoppingList from '../ShoppingList/ShoppingList';


function App() {
  const [shoppingList, setShoppingList] = useState([]);
  const [newItemName, setNewItemName] = useState('');
  const [newQuantity, setNewQuantity] = useState(0);
  const [newUnit, setNewUnit] = useState('');
  const [newItem, setNewItem] = useState({});

  useEffect(() => {
    fetchList();
  }, []);

  // FUNCTIONS
  const clearItemInputs = () => {
    setNewItemName('');
    setNewQuantity(0);
    setNewUnit('');
  }

  const handleSubmit = (evt) => {
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


  // ROUTES 
  // GET
  const fetchList = ()  => {
    axios
      .get('/list')
      .then(response => setShoppingList(response.data))
      .catch(err => console.log('There was an error getting the list', err))
  };

  // DELETE - SINGLE ITEM
  const deleteItemFromList = (itemId) => {
    axios
      .delete(`/list/${itemId}`)
      .then(response => console.log('CLIENT - a response occurred', response))
      .catch(error => console.log('CLIENT - an error occurred', error))
  }
  
  // const 
    return (
        <div className="App">

          <Header />
      
          <main>
            <ItemInputs
            handleSubmit = {handleSubmit} 
            newItemName = {newItemName} 
            setNewItemName = {setNewItemName}
            newQuantity = {newQuantity}
            setNewQuantity = {setNewQuantity} 
            newUnit = {newUnit} 
            setNewUnit = {setNewUnit}
            />
            
            <ShoppingList
             shoppingList={shoppingList}
            />
          </main>
        </div>
    );
}

export default App;
