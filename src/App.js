import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Articles } from './pages/Articles';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <h1>Server-Side Rendering Example</h1>
      <nav>
        <ul className='list-inline'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/articles">Articles</Link></li>
        </ul>
      </nav>
      {/* <Switch> deprecated for <Routes>
        https://stackoverflow.com/questions/69843615/switch-is-not-exported-from-react-router-dom
      */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
