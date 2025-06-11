import { useState } from 'react'
import foodJson from './food.json'
import './App.css'

function App() {
  const [foodItems, setFoodItems] = useState(foodJson)

  const handleCall = (phone) => {
    console.log(`Calling ${phone}`)
  }
  
  function foodCard(name, address, phone) {
    return (
      <div className="food-card card">
        <h2>{name}</h2>
        <p>{address}</p>
        <p>{phone}</p>
        <button className="btn" onClick={() => handleCall(phone)}>Call Now</button>
      </div>
    )
  }

  return (
    <>
      <h1>Halal Restaurants</h1>
      <div className="food-list">
        {foodItems.map((item) => foodCard(item.name, item.address, item.phone))}
      </div>
    </>
  )
}

export default App
