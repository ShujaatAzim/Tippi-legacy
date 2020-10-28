import React, { useState } from 'react'
import TipForm from '../Components/TipForm'
import swal from 'sweetalert'

const TipCalcContainer = () => {

  const [totalTip, setTotalTip] = useState("")
  const [tipPerPerson, setTipPerPerson] = useState("")



  const generateTip = (e, total, service, partySize) => {
    e.preventDefault()
    switch (service) {
      case "excellent":
        total = total * 0.20
        setTotalTip(parseInt(total).toFixed(2))
        setTipPerPerson(parseFloat(total / partySize).toFixed(2))
        break;
      case "good":
        total = total * 0.18
        setTotalTip(parseInt(total).toFixed(2))
        setTipPerPerson(parseFloat(total / partySize).toFixed(2))
        break;
      case "adequate":
        total = total * 0.15
        setTotalTip(parseInt(total).toFixed(2))
        setTipPerPerson(parseFloat(total / partySize).toFixed(2))
        break;
      case "subpar":
        total = total * 0.12
        setTotalTip(parseInt(total).toFixed(2))
        setTipPerPerson(parseFloat(total / partySize).toFixed(2))
        break;
      case "horrid":
        total = total * 0.10
        setTotalTip(parseInt(total).toFixed(2))
        setTipPerPerson(parseFloat(total / partySize).toFixed(2))
        break;
      case "":
        total = NaN
        break;
      default:
        total = total * 1.00
        setTotalTip((total).toFixed(2))
        setTipPerPerson((total / partySize).toFixed(2))
    }
    let totallyTip = parseInt(total).toFixed(2)
    let eachPerson = parseFloat(total / partySize).toFixed(2)
    swal({title: "Success!", text: `Total tip: $${totallyTip}, Tip Per Person: $${eachPerson}`, icon: "success", button: "Okay"})
  }

  return (
    <div>
      <TipForm generateTip={generateTip} />
    </div>
  )
}

export default TipCalcContainer