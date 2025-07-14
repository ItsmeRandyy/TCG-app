import {useEffect, useState} from 'react'


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
      <Card cardImg="./src/assets/cards/sv1a-tropius.jpg" collectionName="sv1a" cardNumber="074/073" Pokemon="Tropius"/>
      <Card cardImg="./src/assets/cards/sv1a-sprigatito.jpg" collectionName="sv1a" cardNumber="075/073" Pokemon="Sprigatito"/>
      <Card cardImg="./src/assets/cards/sv1a-floragato.jpg" collectionName="sv1a" cardNumber="076/073" Pokemon="Floragato"/>
      <Card cardImg="./src/assets/cards/sv1a-meowscarada.jpg" collectionName="sv1a" cardNumber="077/073" Pokemon="Meoscarada"/>
      <Card cardImg="./src/assets/cards/sv1a-fuecoco.jpg" collectionName="sv1a" cardNumber="078/073" Pokemon="Fuecoco"/>
      <Card cardImg="./src/assets/cards/sv1a-pwooper.jpg" collectionName="sv1a" cardNumber="076/073" Pokemon="P. Wooper"/>
      <Card cardImg="./src/assets/cards/sv1s-fidough.jpg" collectionName="sv1S" cardNumber="085/073" Pokemon="Fidough"/> 
      <Card cardImg="./src/assets/cards/sv1s-ralts.jpg" collectionName="sv1S" cardNumber="083/073" Pokemon="Ralts"/>
      <Card cardImg="./src/assets/cards/sv1s-kirlia.jpg" collectionName="sv1S" cardNumber="084/073" Pokemon="Kirlia"/>
      <Card cardImg="./src/assets/cards/sv1s-gardevoir.jpg" collectionName="sv1S" cardNumber="101/073" Pokemon="Gardevoir "/>
    </div>
  </>
)
}

export default App

