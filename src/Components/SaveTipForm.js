import React, { useState } from 'react';

const SaveTipForm = props => {

  const { totalTip, tipPerPerson } = props;
  const [restaurant, setRestaurant] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    console.log(`saving total: ${totalTip} and per person: ${tipPerPerson} for ${restaurant}`)
  }
  
  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <label>Restaurant</label>
        <input name="restaurant" type="text" onChange={e => setRestaurant(e.target.value)} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default SaveTipForm;