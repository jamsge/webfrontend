import { useState, useEffect } from 'react';
import './App.css';
import Item from './Components/Item';
import Cart from './Components/Cart';
import axios from 'axios';

function App() {
  const [itemCart, setItemCart] = useState([])
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)
  const {numItems, setNumItems} = useState(0)

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setItems(response.data);
        setError(null);
      })
      .catch(setError);
    }, []);

    useEffect(() => {
      const itemsy = JSON.parse(localStorage.getItem('itemCart'));
      console.log(itemsy.data)
      // if(itemsy){
      //   setItemCart(itemsy.data)
      // }
    }, []);

    if (error) return <p>An error occurred</p>


  return (
    <div className="App">
      <div className='banner'>
        <div className="banner-title">
          GARBAGE THRIFT STORE WALMART
        </div>
        <div className="banner-cart">
          CART
        </div>
      </div>
    <div className='page'>
      <div className="formation">
      {items.map(({ id, name, email, company }) => (
          <div className='item'>
            <Item
              key={id}
              name={name}
              email={email}
              tagline={company.catchPhrase}
            />
          </div>
      ))}
      </div>

      <div className="formation-cart">
      <p>Total Cart Count: {numItems}</p>
      {itemCart.map(({ id, name, email, company }) => (
            <Cart
              key={id}
              name={name}
              email={email}
              tagline={company.catchPhrase}
            />
      ))}
      </div>
      </div>
    </div>
  );
}

export default App;