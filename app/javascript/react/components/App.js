import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from "react";
import Greeting from './Greeting';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
