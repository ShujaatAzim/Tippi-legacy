import React, { useState } from 'react'

const SaveTipForm = props => {

  const [restaurant, setRestaurant] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    console.log("saving tip...")
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