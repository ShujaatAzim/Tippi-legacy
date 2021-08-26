import React from 'react';
import SaveTipForm from './SaveTipForm';

const TipDisplay = props => {

  const { totalTip, tipPerPerson, extraClear, saveForm, setSaveForm } = props

  const saveTip = () => {
    setSaveForm(true)
    console.log("saving tip...")
  }
  
  return (
    <div style={{ color: "maroon", fontWeight: "bold" }}>
      <p>Total Tip: ${totalTip}</p>
      <p>Tip Per Person: ${tipPerPerson}</p>
      { saveForm ? 
        <SaveTipForm setSaveForm={setSaveForm} totalTip={totalTip} tipPerPerson={tipPerPerson} /> 
        : 
        <div>
          <p>Would you like to save this tip?</p>
          <button onClick={() => saveTip()}>Save Tip</button>
          <button onClick={() => extraClear()}>Don't Save</button>
        </div> }
    </div>
  );
}

export default TipDisplay;