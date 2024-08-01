import React, { lazy, Suspense, useState, createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ShowDetailsPage from './Pages/ShowDetailsPage';
import AllShowsPage from './Pages/AllShowsPage';
import ErrorPage from './Pages/ErrorPage';

export const appContext = createContext();

const HomePage = lazy(() => import('./Pages/HomePage'));

function App() {
  const [show, setShow] = useState({});

  return (
    <appContext.Provider value={{ show, setShow }}>
      <BrowserRouter>
        <Navbar />
        <main style={{ marginTop: '100px' }}>
          <Routes>
            <Route
              path='/'
              element={
                <Suspense fallback={<div style={{textAlign:'center'}}>Please wait...</div>}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path='show/:title'
              element={<ShowDetailsPage />}
            />
            <Route
              path='all-shows'
              element={<AllShowsPage />}
            />
            <Route
              path='not-found'
              element={<ErrorPage />}
            />
            <Route
              path='*'
              element={<ErrorPage />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </appContext.Provider>
  );
}

export default App;
