import React from 'react'; // imports react from react library. not necessary now.
// imports dom , dom manipulates and updates the webpage which is structured in a tree like structure.
// react only renders dom objects that needs changing unlike vanilla dom manpulation which re renders the entire page even with a slightest change in a component
// react renders dom in a virtual dom


// page imports
import Hello from './screen/hello.jsx'
import { Aircraft } from './screen/pass_props.jsx';
import { Animal } from './screen/obj_props.jsx';

function App(props) {  //hello function is made
  return (
    <>
      <Hello />
      <Aircraft plane='737' manufacture='Boeing'/>
      <Aircraft plane='A380'manufacture='Airbus'/>
      <Animal />
    </>
  ) // a function has to have atleast one return fun and it returns something
}

// this is the eventual page where all screens are rendered.

export default App;
