import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { SC, UC, LC, NC } from "./Data/PassChar";
import { toast, ToastContainer } from "react-toastify";

function App() {
// let a = 'Sandeep'
// let n = a.charAt(Math.floor(Math.random()*a.length));
// console.log(n)


  let [upperCase, setUpperCase] = useState(false);
  let [lowerCase, setLowerCase] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [passwordLen, setPasswordLen] = useState(10);
  let [fPass, setFPass] = useState('');

  let createPassword = () => {
    let finalPass = "";
    let charSet = "";
    if (upperCase || lowerCase || number || symbols) {
      if (upperCase) charSet += UC;
      if (lowerCase) charSet += LC;
      if (number) charSet += NC;
      if (symbols) charSet += SC;

      for (let i = 0; i < passwordLen; i++) {
        finalPass +=charSet.charAt(Math.floor(Math.random()*charSet.length))
        setFPass(finalPass);
      } 
    } else {
      toast.error("Please one checkBox! ...");
    }
  }


  let copyPassword = () => {
  if (fPass) {
    navigator.clipboard.writeText(fPass);
    toast("Password copied to clipboard!");
  } else {
    toast.error("No password to copy!");
  }
};


  
  return (
    <div className="App">
      <ToastContainer/>
      <>
        <div className="passwordBox">
          <h3>Password Generator</h3>
          <div className="passwordTextBtn">
            <input type="text" value={fPass} readOnly /> 
            <button onClick={copyPassword}>Copy</button>
          </div>

          <div className="passLength">
            <label>Password Length</label>
            <input
              type="number"
              max={20}
              min={10}
              value={passwordLen}
              onChange={(event) => setPasswordLen(event.target.value)}
            />
          </div>

          <div className="passLength">
            <label>Include Upper Case</label>
            <input
              type="checkbox"
              checked={upperCase}
              onChange={() => setUpperCase(!upperCase)}
            />
          </div>

          <div className="passLength">
            <label>Include Lower Case</label>
            <input
              type="checkbox"
              checked={lowerCase}
              onChange={() => setLowerCase(!lowerCase)}
            />
          </div>
          <div className="passLength">
            <label>Include Numbers</label>
            <input
              type="checkbox"
              checked={number}
              onChange={() => setNumber(!number)}
            />
          </div>

          <div className="passLength">
            <label>Include Symbols</label>
            <input
              type="checkbox"
              checked={symbols}
              onChange={() => setSymbols(!symbols)}
            />
          </div>
          <button className="btn" onClick={createPassword}>
            Generator Password
          </button>
        </div>
      </>
    </div>
  );
}

export default App;
