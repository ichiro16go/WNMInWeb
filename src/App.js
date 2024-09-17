import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { IoWalk, IoMap, IoBook } from 'react-icons/io5';
import BookMarkPage from './view/pages/bmPage';
import MapPage from './view/pages/mapPage';
import WalkCoursePage from './view/pages/walkPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
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
                <IoWalk /> Walk
              </Link>
            </li>
            <li>
              <Link to="/map">
                <IoMap /> Map
              </Link>
            </li>
            <li>
              <Link to="/book">
                <IoBook /> Book
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default App;