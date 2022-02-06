import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container">
        <Textform heading="Enter the Text to Analyse"/>
      </div>
    </>
  );
}

export default App;
