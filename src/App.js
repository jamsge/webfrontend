import { useState, useEffect } from 'react';
import './App.css';
import Item from './Components/Item';
import Cart from './Components/Cart';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([])
  const { numItems, setNumItems } = useState(0)
  const [cart, setCart] = useState([])

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response)
        setItems(response.data);
      })
      .catch((e) => {

      });
  }, []);
  console.log(items)

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
          {
          // NEED TO CHANGE NAME EMAIL AND COMPANY LATER
          items.map(({ id, name, email, company }) => (
            <div key={id} className='item'>
              <Item
                id={id}
                name={name}
                description={email}
                price={company.catchPhrase}
              />
            </div>
          ))}
        </div>

        <div className="formation-cart">
          <p>Total Cart Count: {numItems}</p>

          {/*cart.map(({ id, name, email, company }) => (
            <Cart
              key={id}
              name={name}
              email={email}
              tagline={company.catchPhrase}
            />
      ))*/}
        </div>
      </div>
    </div>
  );
}

export default App;