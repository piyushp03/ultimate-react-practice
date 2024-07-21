/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <text>Hallo :)</text>
    </div>
  );
}

export default App; */

import React from 'react'; // imports react from react library
import ReactDOM from 'react-dom/client'; // imports dom , dom manipulates and updates the webpage which is structured in a tree like structure.
import Say from './goof';
// react only renders dom objects that needs changing unlike vanilla dom manpulation which re renders the entire page even with a slightest change in a component
// react renders dom in a virtual dom


function App(props) {  //hello function is made
  return (
    <>
      <h1>Hello ds</h1>
      <Say />
    </>
  ) // a function has to have atleast one return fun and it returns something
}

const container = document.getElementById("root");  // root element is selected in a container variable
const root = ReactDOM.createRoot(container); //creates root 
root.render(<App />); // renders the passed in argument in this case a function

export default App;
