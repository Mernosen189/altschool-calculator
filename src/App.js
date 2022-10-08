import "./App.css";
import {useState} from 'react';
import Screen from './Screen'




function App() {
 const [calc, setCalc] = useState("")
 const [result, setResult] = useState("")

 const ops =  ["/", "*", ".","-", "+"]

  let digs = []
  for(let i = 1; i < 10; i++){
    digs.push(<button key={i} onClick={()=>updateCalc(i)}>{i}</button>)
  }

const updateCalc = value => {
  if (ops.includes(value) && calc === "" || ops.includes(value) && ops.includes(calc.slice(-1)) ){
    return;
  }
  setCalc(calc + value)
}

const displayRes = () =>{

  let res = eval(calc).toString()
  setCalc(res)

}

const del = () => {
  let val = calc.slice(0, -1)
  setCalc(val.toString())
}

const reset = () => {
  setCalc("")
}



  return (
    <div className="App">     
      <div className="calculator">
        <Screen calc={calc}/>
       
        <div className="operators">
            <button onClick={()=>updateCalc('/')}>/</button>
            <button onClick={()=>updateCalc('*')}>*</button>
            <button onClick={()=>updateCalc('-')}>-</button>
            <button onClick={()=>updateCalc('+')}>+</button>
            <button onClick={()=>del()} onDoubleClick={()=>reset()}>DEL</button>
        </div>
        <div className="digits">
            {digs}
            <button onClick={()=>updateCalc('0')}>0</button>
            <button onClick={()=>updateCalc('.')}>.</button>
            <button onClick={()=>displayRes()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
