import React, { createContext, useState } from 'react';
import './App.css';
import Comp1 from './components/Comp1';

export const HeaderContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <HeaderContext.Provider value={{ count, setCount }}>
        <Comp1 />
      </HeaderContext.Provider>
      <h1>Button from App.js</h1>
      <button onClick={() => (setCount(count + 1))}> {count} from App</button>
    </div>
  );
}

export default App;

