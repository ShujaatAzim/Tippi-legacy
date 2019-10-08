import React from 'react'
import './App.css';
import swal from 'sweetalert';


class App extends React.Component {

  state = {
    total: "",
    service: "",
    partySize: "",
    totalTip: "",
    tipPP: ""
  }

  handleTotal = (event) => {
    this.setState({
      total: event.target.value
    })
  }

  handleService = (event) => {
    this.setState({
      service: event.target.value
    })
  }

  handleParty = (event) => {
    this.setState({
      partySize: event.target.value
    })
  }

  clearForm = (event) => {
    event.preventDefault()
    this.setState({
      total: "",
      service: "",
      partySize: "",
      totalTip: "",
      tipPP: ""
    })
  }

  generateTip = (event) => {
    event.preventDefault();
    let total = this.state.total
    let service = this.state.service
    let partySize = this.state.partySize

    switch (service) {
      case "excellent":
        total = total * 0.20
        break;
      case "good":
        total = total * 0.18
        break;
      case "adequate":
        total = total * 0.15
        break;
      case "subpar":
        total = total * 0.12
        break;
      case "horrid":
        total = total * 0.10
        break;
      case "":
        total = NaN
        break;
      default:
        total = total * 1.00
    }

    let totalTip = parseFloat(total).toFixed(2)
    let tipPerPerson = parseFloat(total / partySize).toFixed(2)

    if (!partySize) {
      swal({title: "Uh oh!", text: "Party size cannot be zero!", icon: "error", button: "Okay"})
    } else if (!total) {
      swal({title: "Uh oh!", text: "Please enter a bill total!", icon: "error", button: "Okay"})
    } else if (total < 0 || total === 0) {
      swal({title: "Uh oh!", text: "Bill total must be greater than $0!", icon: "error", button: "Okay"})
    } else if (!service) {
      swal({title: "Uh oh!", text: "Please select a service level!", icon: "error", button: "Okay"})
    } else if (!isNaN(total) && !isNaN(tipPerPerson)) {
      swal({title: "Success!", text: `Total tip: $${totalTip}, Tip Per Person: $${tipPerPerson}`, icon: "success", button: "Okay"})
      this.setState({
        totalTip: totalTip,
        tipPP: tipPerPerson
      })
    }
  }

  render() {

    return (
      <div style={{ border: "solid", textAlign: "center", backgroundColor: "whitesmoke", margin: "3% 25%", paddingBottom: "30px"}}>
        <div>
          <h1 style={{ fontSize: "50px", color: "maroon" }}>Just the Tip!</h1>
          <h6>By Shujaat Azim</h6>
        </div>
          <form onSubmit={this.generateTip}>
            <label style={{ color: "maroon", fontWeight: "bold"}}>
              How much is your bill?
              <br />
              <br />
            </label>
            <input required placeholder="$" type="number" step="0.01" min="0.00" value={this.state.total} onChange={this.handleTotal} style={{ width: "7%" }}/>
          <br />
          <br />
            <label style={{ color: "maroon", fontWeight: "bold"}}>
              How was the service? 
              <br />
              <br />
            </label>
              <select required name="service" value={this.state.service} onChange={this.handleService}>
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
              <input required min="1" placeholder ="#" type="number" value={this.state.partySize} onChange={this.handleParty} style={{ width: "5%" }}/>
          <br />
          <br />
            <input type="submit" />
          </form>
          <br />
          <br />
            <button type="button" className="btn-danger" onClick={this.clearForm}>Clear</button>
        </div>
    );
  }
}

export default App;