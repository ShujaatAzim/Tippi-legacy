import React from 'react'
import './App.css';
// import swal from 'sweetalert';


class App extends React.Component {

  state = {
    total: "",
    service: "",
    partySize: "",
    totalTip: 0,
    tipPP: 0
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

  generateTip = (event) => {
    event.preventDefault();
    let total = this.state.total
    let service = this.state.service
    let partySize = this.state.partySize
    let tipPerPerson = total / partySize

    switch (service) {
      case "excellent":
        total = total * 0.20
        break;
      case "good":
        total = total * 0.15
        break;
      case "adequate":
        total = total * 0.12
        break;
      case "subpar":
        total = total * 0.10
        break;
      case "horrid":
        total = total * 0.00
        break;
      case "":
        total = NaN
        break;
      default:
        total = total * 1.00
    }

    if (partySize === "0" || partySize === 0) {
      // swal({title: "Uh oh!", text: "Party size cannot be zero!", icon: "error", button: "Okay"})
      this.setState({
        total: "",
        service: "",
        partySize: "",
        totalTip: "",
        tipPP: ""        
      })
    } else if (!isNaN(total) && !isNaN(tipPerPerson)) {
      this.setState({
        total: "",
        service: "",
        partySize: "",
        totalTip: "$" + parseFloat(total).toFixed(2),
        tipPP: "$" + parseFloat((total / this.state.partySize)).toFixed(2)
      })
    } else if (total === "") {
      // swal({title: "Uh oh!", text: "Please enter a bill total!", icon: "error", button: "Okay"})
      this.setState({
        total: "",
        service: "",
        partySize: "",
        totalTip: "$",
        tipPP: "$"        
      })
    } else if (service === "") {
      // swal({title: "Uh oh!", text: "Please select a service level!", icon: "error", button: "Okay"})
      this.setState({
        total: "",
        service: "",
        partySize: "",
        totalTip: "$",
        tipPP: "$"        
      })      
    }
  }

  render() {

    return (
      <div style={{ textAlign: "center" }}>
        <h1>Tip Calculator</h1>
        <h6>By Shujaat Azim</h6>
          <form onSubmit={this.generateTip}>
            <label style={{ color: "green", fontWeight: "bold"}}>
              How much is your bill?
              <br />
              <br />
            </label>
            $<input type="text" value={this.state.total} onChange={this.handleTotal} style={{ width: "7%" }}/>
          <br />
          <br />
            <label style={{ color: "green", fontWeight: "bold"}}>
              How was the service? 
              <br />
              <br />
            </label>
              <select name="service" value={this.state.service} onChange={this.handleService}>
                <option value="" disabled hidden>Choose One</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="adequate">Adequate</option>
                <option value="subpar">Sub-Par</option>
                <option value="horrid">Horrid</option>
              </select>
          <br />
          <br />
            <label style={{ color: "green", fontWeight: "bold"}}>
              How many people splitting? 
              <br />
              <br />
            </label>
              <input type="text" value={this.state.partySize} onChange={this.handleParty} style={{ width: "5%" }}/>
          <br />
          <br />
            <input type="submit" />
          </form>
          <br />
          <br />
            <h2>Total Tip: {this.state.totalTip}</h2>
            <h2>Tip Per Person: {this.state.tipPP}</h2>
        </div>
    );
  }
}

export default App;