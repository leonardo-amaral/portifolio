import React from 'react'
import './styles/App.css'
import Github from './pages/Github';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  // alert('O portifolio ainda está em desenvolvimento, então é normal encontrar alguns bugs, ou algumas falhas.')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Github />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
