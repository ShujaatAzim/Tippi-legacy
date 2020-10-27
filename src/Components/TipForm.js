import React, { useState } from 'react'

const TipForm = () => {

  const [total, setTotal] = useState("")
  const [service, setService] = useState("")
  
  return (
    <div>
      <div>
        <form onSubmit={this.generateTip}>
          <label style={{ color: "maroon", fontWeight: "bold"}}>How much is your bill?</label>
          <input required placeholder="$" type="number" step="0.01" min="0.00" 
            value={total} onChange={e => setTotal(e.target.vale)} style={{ width: "7%" }} />
            
          <label style={{ color: "maroon", fontWeight: "bold"}}>
            How was the service? 
          </label>
          <select required name="service" value={service} onChange={e => setService(e.target.value)}>
            <option value="" disabled hidden>Choose One</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="adequate">Adequate</option>
            <option value="subpar">Sub-Par</option>
            <option value="horrid">Horrid</option>
          </select>

          <label style={{ color: "maroon", fontWeight: "bold"}}>
            How many people are splitting? 
          </label>
          <input required min="1" placeholder ="#" type="number" value={this.state.partySize} 
            onChange={this.handleParty} style={{ width: "5%" }}/>
          <input type="submit" />
        </form>
      </div>
      <div>
        <button type="button" className="btn-danger" onClick={this.clearForm}>Clear</button>
      </div>
    </div>
  )
}

export default TipForm