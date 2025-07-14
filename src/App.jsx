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
const images = import.meta.glob('./assets/cards/*.jpg', { eager: true, import: 'default' })

const App = () => {
  return (
    <>
      <h2>TCG Wishlist</h2>
      <div className="card-row">
        {cards.map(card => {
          const cardImg = images[`./assets/cards/${card.file}`]
          return (
            <Card
              key={card.name}
              cardImg={cardImg}
              collectionName={card.collection}
              cardNumber={card.number}
              Pokemon={card.name}
            />
          )
        })}
      </div>
    </>
  )
}

export default App

