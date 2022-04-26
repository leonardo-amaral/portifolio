import React from 'react'
import './styles/App.css'
import Introduction from './pages/Introduction';
import Content from './pages/Content';
import Github from './pages/Github';

function App() {
  alert('O portifolio ainda está em desenvolvimento, então é normal encontrar alguns bugs, ou algumas falhas.')
  return (
    <div className="App">
      <Introduction />
      <Content />
      {/* <Github /> */}
    </div>
  );
}

export default App;
