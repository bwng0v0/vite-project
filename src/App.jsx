import { useEffect, useState } from 'react';
import { Routes, Link, Route } from 'react-router-dom';
import InputPage from './page/InputPage';
import Recommend from './page/Recommend';


function App() {
  return (
    <Routes>
      <Route path='/' element={<InputPage />} />
      <Route path='/Recommend' element={<Recommend />} />
    </Routes>
  )
}

export default App
