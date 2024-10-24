import { useState } from 'react';

function OrderForm() {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div>
            <br />
            <h2>Select a product</h2>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px', marginBottom: '10px' }}>
                <h3 style={{ marginRight: '10px' }}>Product:</h3>
                <select>
                    <option value="product1">GeForce RTX 4090 (2000€)</option>
                    <option value="product2">GeForce RTX 4070 Ti (900€)</option>
                    <option value="product3">GeForce RTX 4060 (300€)</option>
                </select>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
            <h3 style={{ marginRight: '20px' }}>Quantity:</h3>
            <button
                onClick={decreaseQuantity}
                style={{ marginRight: '5px', width: '25px', height: '20px'}}
            ></button>
                <span style={{ marginRight: '5px'}}>{quantity}</span>
            <button
                onClick={increaseQuantity}
                style= {{ width: '25px', height: '20px'}}
            ></button>
            </div>
            
        </div>
    );
}

export default OrderForm;
