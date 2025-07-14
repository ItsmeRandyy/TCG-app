import {useEffect, useState} from 'react'
import tropius from './assets/cards/sv1a-tropius.jpg'
import sprigatito from './assets/cards/sv1a-sprigatito.jpg'
import floragato from './assets/cards/sv1a-floragato.jpg'
import meowscarada from './assets/cards/sv1a-meowscarada.jpg'
import fuecoco from './assets/cards/sv1a-fuecoco.jpg'
import pwooper from './assets/cards/sv1a-pwooper.jpg'
import fidough from './assets/cards/sv1s-fidough.jpg'
import ralts from './assets/cards/sv1s-ralts.jpg'
import kirlia from './assets/cards/sv1s-kirlia.jpg'
import gardevoir from './assets/cards/sv1s-gardevoir.jpg'


const Card = ({cardImg, cardNumber, collectionName, Pokemon}) => {
  const [count, setCount] = useState(0);
  const [haveBought, setHaveBought] = useState();
  useEffect(() => {
  console.log(`${Pokemon} has been bought: ${haveBought}`);
}, [haveBought]);



return (
<div className="card">
  <img src={cardImg} alt={Pokemon} />
  <div className="heading">
    <h2>{Pokemon}</h2>
    <p className="set-name">{collectionName}</p>
  </div>
<div className="button-island">
  {/* Toggle Bought status */}
  <button
    onClick={() => {
      setHaveBought(!haveBought);
      if (haveBought) setCount(0); // Optional: reset when unmarking
    }}
  >
    {haveBought ? 'Bought' : 'To Buy'}
  </button>

  {/* Show +/- buttons only if haveBought is true */}
  {haveBought && (
    <div className="counter-controls">
      <button onClick={() => setCount(count + 1)}>➕</button>
      <button onClick={() => setCount(prev => (prev > 0 ? prev - 1 : 0))}>➖</button>
    </div>
  )}
  </div>

  <p>Owned: {count}</p>
</div>
)
}

const App = () => {

return (
  <>
    <h2>TCG Wishlist</h2>
    <div className="card-row">
<Card cardImg={tropius} collectionName="sv1a" cardNumber="074/073" Pokemon="Tropius"/>
<Card cardImg={sprigatito} collectionName="sv1a" cardNumber="075/073" Pokemon="Sprigatito"/>
<Card cardImg={floragato} collectionName="sv1a" cardNumber="076/073" Pokemon="Floragato"/>
<Card cardImg={meowscarada} collectionName="sv1a" cardNumber="077/073" Pokemon="Meoscarada"/>
<Card cardImg={fuecoco} collectionName="sv1a" cardNumber="078/073" Pokemon="Fuecoco"/>
<Card cardImg={pwooper} collectionName="sv1a" cardNumber="076/073" Pokemon="P. Wooper"/>
<Card cardImg={fidough} collectionName="sv1S" cardNumber="085/073" Pokemon="Fidough"/> 
<Card cardImg={ralts} collectionName="sv1S" cardNumber="083/073" Pokemon="Ralts"/>
<Card cardImg={kirlia} collectionName="sv1S" cardNumber="084/073" Pokemon="Kirlia"/>
<Card cardImg={gardevoir} collectionName="sv1S" cardNumber="101/073" Pokemon="Gardevoir "/>
    </div>
  </>
)
}

export default App

