import { useState, useEffect } from 'react';
import Number from './NumberComponenti';

function App() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log(number)

  }, [number])

  const sayıyıArttır = () => {
    setNumber(number + 1);
  }

  return (
    <div className="App">
      <Number num={number} />
      <br />
      <button onClick={() => { sayıyıArttır() }}>Sayıyı Arttır</button>
    </div>
  );
}

export default App;
