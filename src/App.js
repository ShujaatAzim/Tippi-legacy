import React from 'react';
import TipCalcContainer from './ContainerComponents/TipCalcContainer';

const App = () => {
  return (
    <div style={{ border: "solid", textAlign: "center", backgroundColor: "whitesmoke", margin: "3% 25%", paddingBottom: "30px"}}>
      <div>
        <h1 style={{ fontSize: "50px", color: "maroon" }}>Tippi</h1>
        <h6>By Shujaat Azim</h6>
      </div>
        <TipCalcContainer />
      </div>
  );
}

export default App;