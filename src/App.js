import React, { useState } from 'react'
import HomePage from './Pages/HomePage';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowDetailsPage from './Pages/ShowDetailsPage';
import { createContext } from 'react';
import AllShowsPage from './Pages/AllShowsPage';
import ErrorPage from './Pages/ErrorPage';

export const appContext = createContext();

function App() {
  const [show, setShow] = useState({});

  return (
    <appContext.Provider value={{show, setShow}}>
      <Navbar />
      <main style={{ marginTop: '100px' }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='show/:title' element={<ShowDetailsPage />} />
          <Route path='all-shows' element={ <AllShowsPage/> } />
          <Route path='not-found' element={ <ErrorPage/> } />
          <Route path='*' element={ <ErrorPage/> } />
        </Routes>
        </BrowserRouter>
      </main>
    </appContext.Provider>
  );
}

export default App;
