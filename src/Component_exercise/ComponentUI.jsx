import pinklogo from '../assets/pinklogo.png';

function ComponentUI() {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img 
                src={pinklogo} 
                alt="Pink Logo" 
                width="100" 
                height="100" 
                style={{ marginRight: '10px' }}
            />
            <h1>Welcome to the product page!</h1>
        </div>
    ); 
}

export default ComponentUI;
