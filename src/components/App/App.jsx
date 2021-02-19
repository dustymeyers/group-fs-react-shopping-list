import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import './App.css';
import ItemInputs from '../ItemInputs/ItemInputs'
import ShoppingList from '../ShoppingList/ShoppingList';
import ResetButton from '../ResetButton/ResetButton'


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
    // setNewItem({
    //   item: newItemName,
    //   quantity: newQuantity,
    //   unit: newUnit
    // });
    console.log('this is the newItem', newItemName);
    // shoppingList function - POST in App.jsx
    // shoppingList(newItem)
    
    // clear the inputs
    clearItemInputs();
    addToList(newItemName, newQuantity, newUnit);
  }

  // Reset all PUT route
  const handleReset = () => {
    console.log('In handle reset');
    axios
      .put('/allItems')
      .then(response => console.log('Reset All'))
      .catch(err => console.log('Reset all error', err))
  };


  // ************ ROUTES **************
  // GET
  const fetchList = ()  => {
    axios
      .get('/list')
      .then(response => setShoppingList(response.data))
      .catch(err => console.log('There was an error getting the list', err))
  };
  
  // POST - ADD SINGLE ITEM
  const addToList = (name, quantity, unit) => {
    console.log('this is the item', name);
    
    axios
      .post('/list', {name, quantity, unit})
      .then((response) => {console.log('CLIENT - PUT - a response occurred', response) 
        fetchList()
      })
      .catch(error => {
        console.log('axios POST error', error)
      })
  }

   // PUT - UPDATE SINGLE ITEM 
   const updateItemFromList = (itemId) => {
    console.log('updateItemFromList() ');

    axios.put(`/list/${itemId}`)
    .then(response => {
      console.log('CLIENT - PUT - a response occurred', response);
      fetchList();
    })
    .catch(error => {
      console.log('CLIENT - PUT - an error occurred', error)
    })
  }

  // DELETE - DELETE SINGLE ITEM
  const deleteItemFromList = (itemId) => {
    console.log('deleteItemFromList() ');

    axios.delete(`/list/${itemId}`)
    .then(response => {
      console.log('CLIENT - DELETE - a response occurred', response);
      fetchList();
    })
    .catch(error => {
      console.log('CLIENT - DELETE - an error occurred', error)
    })
  }
  
  // DELETE - DELETE ALL ITEMS
  const deleteShoppingList = () => {
  console.log('deleteShoppingList() ');
    
    axios
      .delete('/allItems')
      .then(response => fetchList())
      .catch(err => console.log('Tere was an error deleting the list', err))
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
            <ResetButton 
              handleReset={handleReset}
            />

      

            <button onClick={deleteShoppingList}>Clear</button>


            <ShoppingList
             shoppingList={shoppingList}
             deleteItemFromList={deleteItemFromList}
             updateItemFromList={updateItemFromList}
            />
          </main>
        </div>
    );
}

export default App;
