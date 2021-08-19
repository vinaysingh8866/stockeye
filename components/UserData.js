import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const App = () => {
  const [name, setName] = useState('');
  const [stocks, setstocks] = useState('');
  const [cost, setcost] = useState('');

  return (
    <div
      style={{
        marginLeft: '40%'
      }}
    >
      <h2>Save Data For Future Reference </h2>
      <TextField
        value={name}
        label="Enter your name"
        onChange={e => {
          setName(e.target.value);
        }}
      />

      <TextField
        value={stocks}
        label="Enter Total stocks"
        onChange={e => {
          setstocks(e.target.value);
        }}
      />

      <TextField
        value={cost}
        label="Enter Total cost"
        onChange={e => {
          setcost(e.target.value);
        }}
      /> <h3>Your Enter Value is: {name} </h3>
      <h3>Your Enter Value is: {stocks} </h3>
      <h3>Your Enter Value is: {name} </h3>

      
    <button type="submit" class="i">Submit</button>

    </div>

 
  );
 
};


export default App;