import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';


function App() {
  // const 
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
                <ul>
                  <li>
                    <div>Apples</div>
                    <div>5 lbs</div>
                    <div>
                      <button>Buy</button>
                      <button>Remove</button> 
                    </div>
                  </li>
                </ul>
            </main>
        </div>
    );
}

export default App;
