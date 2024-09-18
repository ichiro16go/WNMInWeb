import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { IoWalk, IoMap, IoBook } from 'react-icons/io5';
import BookMarkPage from './view/pages/bmPage';
import MapPage from './view/pages/mapPage';
import WalkCoursePage from './view/pages/walkPage';
import './App.css';

function Header() {
  const location = useLocation();
  let pageTitle = '';

  switch (location.pathname) {
    case '/walk':
      pageTitle = 'Walk Course';
      break;
    case '/map':
      pageTitle = 'Map';
      break;
    case '/book':
      pageTitle = 'Book Mark';
      break;
    default:
      pageTitle = 'Home';
  }

  return (
    <header className="header">
      <h1>{pageTitle}</h1>
    </header>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/walk" element={<WalkCoursePage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/book" element={<BookMarkPage />} />
          </Routes>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/walk">
                <IoWalk /> 
              </Link>
            </li>
            <li>
              <Link to="/map">
                <IoMap /> 
              </Link>
            </li>
            <li>
              <Link to="/book">
                <IoBook /> 
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default App;