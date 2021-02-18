import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';


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
                <p>Under Construction...</p>
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
            </main>
        </div>
    );
}

export default App;
