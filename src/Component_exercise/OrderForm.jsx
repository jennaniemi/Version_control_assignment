import { useState } from 'react';

function OrderForm({ onProductChange, onQuantityChange, quantity }) {
    const [selectedProduct, setSelectedProduct] = useState("product1");

    const handleProductSelect = (event) => {
        const product = event.target.value;
        setSelectedProduct(product);
        onProductChange(product);
    };

    const increaseQuantity = () => {
        const newQuantity = quantity + 1;
        onQuantityChange(newQuantity);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            onQuantityChange(newQuantity);
        }
    };

    return (
        <div>
            <br />
            <h2>Select a product</h2>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px', marginBottom: '10px' }}>
                <h3 style={{ marginRight: '10px' }}>Product:</h3>
                <select value={selectedProduct} onChange={handleProductSelect}>
                    <option value="product1">GeForce RTX 4090 (2000€)</option>
                    <option value="product2">GeForce RTX 4070 Ti (900€)</option>
                    <option value="product3">GeForce RTX 4060 (300€)</option>
                </select>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
                <h3 style={{ marginRight: '20px' }}>Quantity:</h3>
                <button
                    onClick={decreaseQuantity}
                    style={{ marginRight: '5px', width: '25px', height: '20px' }}>-</button>
                <span style={{ marginRight: '5px' }}>{quantity}</span>
                <button
                    onClick={increaseQuantity}
                    style={{ width: '25px', height: '20px' }}>+</button>
            </div>
        </div>
    );
}

export default OrderForm;
