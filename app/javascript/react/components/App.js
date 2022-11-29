import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect } from "react";
import Greeting from './Greeting';
import { useDispatch, useSelector } from 'react-redux';
import getData, { fetchData } from '../store/getData';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

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
