import { useState } from 'react';
import './App.css';

function App() {

  const [quantity, setQuantity] = useState(0);

  return (
    <>
      <CartItem
        name={"Apples"}
        quantity={quantity}
        remove={ () => {
          if (quantity > 0) {
            setQuantity(quantity - 1)
          }
        } }
        add={ () => setQuantity(quantity + 1)}
      />

      <CartItem
        name={"Bananas"}
        quantity={quantity}
        remove={ () => {
          if (quantity > 0) {
            setQuantity(quantity - 1)
          }
        } }
        add={ () => setQuantity(quantity + 1)}
      />

      <CartItem
        name={"Grapes"}
        quantity={quantity}
        remove={ () => {
          if (quantity > 0) {
            setQuantity(quantity - 1)
          }
        } }
        add={ () => setQuantity(quantity + 1)}
      />
    </>
  );
}

const CartItem = ( {name, remove, add, quantity} ) => {
  return (
    <>
      <span>{`${name}`}</span>
      <button onClick={remove}>-</button>
      <input value={quantity} readonly />
      <button onClick={add}>+</button>
    </>
  )
}

export default App;
