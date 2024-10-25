import { useState, useEffect } from 'react';

function OrderInfo({ selectedProduct, quantity }) {
    const [total, setTotal] = useState(0);

    const productNames = {
        product1: "GeForce RTX 4090",
        product2: "GeForce RTX 4070 Ti",
        product3: "GeForce RTX 4060"
    };

    const productPrices = {
        product1: 2000,
        product2: 900,
        product3: 300
    };

    useEffect(() => {
        setTotal(quantity * productPrices[selectedProduct]);
    }, [selectedProduct, quantity]);

    return (
        <div>
            <h2>Order Info</h2>
            <table style={{ width: '60%', marginLeft: '20px', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #000', padding: '8px' }}>Product</th>
                        <th style={{ border: '1px solid #000', padding: '8px' }}>Quantity</th>
                        <th style={{ border: '1px solid #000', padding: '8px' }}>Total (€)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid #000', padding: '8px' }}>{productNames[selectedProduct]}</td>
                        <td style={{ border: '1px solid #000', padding: '8px' }}>{quantity}</td>
                        <td style={{ border: '1px solid #000', padding: '8px' }}>{total}€</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default OrderInfo;
