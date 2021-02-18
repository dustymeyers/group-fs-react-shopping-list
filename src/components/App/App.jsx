import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import './App.css';
import ItemInputs from '../ItemInputs/ItemInputs'
import ShoppingList from '../ShoppingList/ShoppingList';


function App() {
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = ()  => {
    axios
      .get('/list')
      .then(response => setShoppingList(response.data))
      .catch(err => console.log('There was an error getting the list', err))
  };
  
  // const 
    return (
        <div className="App">

          <Header />
      
          <main>
            <ItemInputs />
            
            <ShoppingList
             shoppingList={shoppingList}
            />
          </main>
        </div>
    );
}

export default App;
