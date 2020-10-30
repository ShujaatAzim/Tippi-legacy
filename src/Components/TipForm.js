import React, { useState } from 'react'
import swal from 'sweetalert'

const TipForm = props => {

  const [total, setTotal] = useState("")
  const [service, setService] = useState("")
  const [partySize, setPartySize] = useState("")
  
  const clearForm = () => {
    setTotal("")
    setService("")
    setPartySize("")
  }

  const handleSubmit = (e, total, service, partySize) => {
    e.preventDefault()
    if (!partySize) {
      swal({title: "Uh oh!", text: "Party size cannot be zero!", icon: "error", button: "Okay"})
    } else if (!total) {
      swal({title: "Uh oh!", text: "Please enter a bill total!", icon: "error", button: "Okay"})
    } else if (total < 0 || total === 0) {
      swal({title: "Uh oh!", text: "Bill total must be greater than $0!", icon: "error", button: "Okay"})
    } else if (!service) {
      swal({title: "Uh oh!", text: "Please select a service level!", icon: "error", button: "Okay"})
    } else {
      props.generateTip(e, total, service, partySize)
    }
  }

  return (
    <div>
      <form onSubmit={e => handleSubmit(e, total, service, partySize)}>
        <label style={{ color: "maroon", fontWeight: "bold"}}>
          How much is your bill?
          <br />
          <br />
        </label>
        <input  placeholder="$" type="number" step="0.01" min="0.00" 
          value={total} onChange={e => setTotal(e.target.value)} style={{ width: "7%" }} />
      <br />
      <br />
        <label style={{ color: "maroon", fontWeight: "bold"}}>
          How was the service? 
          <br />
          <br />
        </label>
          <select  name="service" value={service} onChange={e => setService(e.target.value)}>
            <option value="" disabled hidden>Choose One</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="adequate">Adequate</option>
            <option value="subpar">Sub-Par</option>
            <option value="horrid">Horrid</option>
          </select>
      <br />
      <br />
        <label style={{ color: "maroon", fontWeight: "bold"}}>
          How many people are splitting? 
          <br />
          <br />
        </label>
          <input  min="1" placeholder ="#" type="number" value={partySize} 
            onChange={e => setPartySize(e.target.value)} style={{ width: "5%" }}/>
      <br />
      <br />
        <input type="submit" />
      </form>
      <br />
      <br />
      <button onClick={() => {clearForm();props.extraClear()}}>Clear</button>
      <button>History</button>
    </div>
  )
}

export default TipForm