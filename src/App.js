import React from 'react';
import './App.css';
import HomePage from './components/homepage/homepage.component';
import { Route, Routes } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>This is the hats page!!!</h1>
  </div>
)

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/hats' element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
