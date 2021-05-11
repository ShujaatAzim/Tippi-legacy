import React, { useState } from 'react'

const SaveTipForm = () => {

  const [restaurant, setRestaurant] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    console.log(`saving tip for ${restaurant}`)
  }
  
  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <label for="restaurant">Restaurant</label>
        <input name="restaurant" type="text" onChange={e => setRestaurant(e.target.value)} />
      </form>
    </div>
  )
}

export default SaveTipForm