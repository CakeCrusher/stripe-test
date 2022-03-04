import './App.css';
import StripeContainer from './components/StripeContainer';
import React, {useState} from 'react';


function App() {
  const [showItem, setShowItem] = useState(false);

  return (
    <div>
      <h1>spatula</h1>
      {showItem ? <StripeContainer /> : (
        <>
        <h3>10$</h3>
        <button onClick={() => setShowItem(true)}> ppurchase</button>
        </>
      )}
    </div>
  );
}

export default App;
