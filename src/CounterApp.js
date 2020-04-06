import React from 'react';
import './App.css';


function Button(props){
    const handleClick = () => props.onClickFunction(props.increment);
    return(
      <button onClick={handleClick}>
        +{props.increment}
        </button>
    );
  }
  
  function Display(props){
    return (
      <div>{props.message}</div>  
    );
  }
  
  function CounterApp(){
    const [counter, setCounter] = React.useState(0);
    const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
    return(  
      <div>
        <Button onClickFunction={incrementCounter} increment={1}/>
        <Button onClickFunction={incrementCounter} increment={5}/>
        <Button onClickFunction={incrementCounter} increment={10}/>
        <Button onClickFunction={incrementCounter} increment={100}/>
        <Display message={counter}/>
      </div>
    );
  }
  


  export default CounterApp;