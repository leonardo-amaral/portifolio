import React from 'react'
import './styles/App.css'
import Introduction from './pages/Introduction';
import Content from './pages/Content';
import Github from './pages/Github';

function App() {
  return (
    <div className="App">
      <Introduction />
      <Content />
      {/* <Github /> */}
    </div>
  );
}

export default App;
