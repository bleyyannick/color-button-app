import './App.css';

import {useState} from 'react'; 



function App() {

  const [buttonColor, setButtonColor ] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'; 

  const handleClick = ()=> setButtonColor(newButtonColor); 
  return (
    <div className="App">
      <button 
      style={{backgroundColor: buttonColor}}
      onClick={handleClick}>
        Change to {newButtonColor}</button>
    </div>
  );
}

export default App;
