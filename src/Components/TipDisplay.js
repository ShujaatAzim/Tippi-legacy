import React from 'react'

const TipDisplay = props => {

  const { totalTip, tipPerPerson } = props

  const saveTip = () => {
    console.log("saving tip...")
  }
  
  return (
    <div>
      <p>Total Tip: {totalTip}</p>
      <p>Tip Per Person: {tipPerPerson}</p>
      <p>Would you like to save this tip?</p>
      <button onClick={() => saveTip()}>Save Tip</button>
    </div>
  )
}

export default TipDisplay