import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  const[Mode, setMode] = useState('light');

  const toggleMode =()=>
  {
    if(Mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode}/>
      <div className="container">
        <Textform heading="Enter the Text to Analyse" mode={Mode} />
      </div>
    </>
  );
}

export default App;
