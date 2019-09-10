import React from 'react'
import './App.css';

class App extends React.Component {

  state = {
    total: 0,
    service: "",
    partySize: 0,
    tip: 0
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
      default:
        total = total * 1.00
    }
    
    this.setState({
      total: 0,
      service: "",
      partySize: 0,
      tip: total / this.state.partySize
    })
  }

  render() {

    return (
      <div>
      <h1>Tip Calculator</h1>
      <h6>By Shujaat Azim</h6>
      <form onSubmit={this.generateTip}>
        <label>
          Total Bill: $
        <input type="text" value={this.state.total} onChange={this.handleTotal}/>
        </label>
      <br />
      <br />
        <label>
          How was the service?
          <select name="service" value={this.state.service} onChange={this.handleService}>
            <option value="" selected disabled hidden>Choose One</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="adequate">Adequate</option>
            <option value="subpar">Sub-Par</option>
            <option value="horrid">Horrid</option>
          </select>
        </label>
      <br />
      <br />
        <label>
          How many people splitting?
          <input type="text" value={this.state.partySize} onChange={this.handleParty}/>
        </label>
      <br />
      <br />
        <input type="submit" />
      </form>
      <br />
      <br />
      Tip per person: ${this.state.tip}
    </div>
  );
}
}

export default App;
