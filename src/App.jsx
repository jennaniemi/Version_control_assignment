import { useState } from 'react';
import ComponentUI from './Component_exercise/ComponentUI';
import OrderForm from './Component_exercise/Orderform';
import OrderInfo from './Component_exercise/OrderInfo';
import pinklogo from './assets/pinklogo.png';

function App() {
  const [selectedProduct, setSelectedProduct] = useState("product1");
  const [quantity, setQuantity] = useState(1);

  const handleProductChange = (product) => {
    setSelectedProduct(product);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <div>
      <ComponentUI />
      <OrderForm 
        onProductChange={handleProductChange}
        onQuantityChange={handleQuantityChange}
        quantity={quantity}
      />
      <OrderInfo selectedProduct={selectedProduct} quantity={quantity} />
    </div>
  );
}

export default App;
