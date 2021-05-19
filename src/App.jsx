import React, {useState} from 'react';
//import ReactDOM from 'react-dom';
import "./app.scss"
import "./global.scss"

function App() {

  // const [data, setData] = useState("");
  // const calculatorButtons = [];
  // [9,8,7,6,5,4,3,2,1,0,".","%"].forEach(i => {
  //   calculatorButtons.push(
  //     <button onClick={o => {
  //       setData(data + o.target.value)
  //     }}
  //     value={i}
  //     key={i}>
  //       {i}
  //     </button>
  //   )
  // })

  const [data, setData] = useState(""); //holds the result of the calculation
  
  const click = (i) => {
    setData(data + i.target.name); //continous input of numbers and operations
  }

  const clear = () => {
    setData(""); // clear button
  }

  const c = () => {
    setData(data.substr(0, data.length- 1)); //deletion using backspace button
  }

  const calc = () => {
    try{
      setData(eval(data).toString()); // calculation using eval
    }catch(err){
      setData("Error");
    }
  }
  return (
    <div className="title">
      <h1>
        Simple React Calculator
      </h1>
      <div className="container">
        <form>
          <input type="text" value={data}/>{/* this is how we display the result of the calc using the data variable / HOOKS LOL*/}
        </form>
        <div className="calculatorButtons">
          <button className="operations" id="clear" onClick={clear}>Clear</button>
          <button className="operations" id="c" onClick={c}>C</button>
          <button className ="operations" name="/" onClick={click}>/</button>
          <button name ="7" onClick={click}>7</button>
          <button name ="8" onClick={click}>8</button>
          <button name ="9" onClick={click}>9</button>
          <button className="operations" name="*" onClick={click}>*</button>
          <button name ="4" onClick={click}>4</button>
          <button name ="5" onClick={click}>5</button>
          <button name ="6" onClick={click}>6</button>
          <button className="operations" name="-"onClick={click}>-</button>
          <button name ="1" onClick={click}>1</button>
          <button name ="2" onClick={click}>2</button>
          <button name ="3" onClick={click}>3</button>
          <button className="operations" name="+" onClick={click}>+</button>
          <button name ="0" onClick={click}>0</button>
          <button name ="." onClick={click}>.</button>
          <button className="operations" id="result" onClick={calc}>=</button>
        </div>
      </div>
      <div className="footer">
          Made by Marc Xavier Pragata
      </div>
    </div>
  );
}

export default App;
