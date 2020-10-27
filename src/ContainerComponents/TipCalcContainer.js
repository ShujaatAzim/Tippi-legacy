import React from 'react'

const TipCalcContainer = () => {

  const [] = useState("")

  return (
    <div style={{ border: "solid", textAlign: "center", backgroundColor: "whitesmoke", margin: "3% 25%", paddingBottom: "30px"}}>
      <div>
        <h1 style={{ fontSize: "50px", color: "maroon" }}>Just the Tip!</h1>
        <h6>By Shujaat Azim</h6>
      </div>
      <div>
      { this.state.historyShowing ? 
        <button type="button" className="btn-warning" onClick={this.seeHistory}>Hide History</button> :
        <button type="button" className="btn-warning" onClick={this.seeHistory}>Show History</button> 
      }
      </div>
      <div>
        { this.state.historyShowing ? this.state.tipHistory.length !== 0 ? 
          this.state.tipHistory.map( tipObj => `${tipObj.amount} ${" "}`) : "no tips yet" : 
          null  
        }
      </div>
    </div>
  )
}

export default TipCalcContainer