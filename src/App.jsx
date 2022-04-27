import React from 'react'
import './styles/App.css'
import Github from './pages/Github';
import Home from './pages/Home';

function App() {
  // alert('O portifolio ainda está em desenvolvimento, então é normal encontrar alguns bugs, ou algumas falhas.')
  return (
    <div className="App">
      <Home />
      {/* <Github /> */}
    </div>
  );
}

export default App;
