import { useState } from 'react';
import './App.css';

function App() {
  const [ count, setCount] = useState(0);

  return (
    <div className="App">
      <div style={{
        padding: '3rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        border: 'solid 2px black'
      }}>

        <p style={{
          fontSize: '2rem'
        }}>{count}</p>

        <div style={{
          display: 'flex',
          gap: '.5rem'
        }}>
          <button 
            onClick={() => setCount(count + 1)}> + </button>

          <button 
            onClick={() => setCount(count === 0 ? 0 : count - 1)}> - </button>
          <button onClick={() => setCount(0)}>reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
