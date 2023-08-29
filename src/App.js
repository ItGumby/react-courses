import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Articles } from './pages/Articles';
import { CounterButton } from './components/CounterButton';

//import './App.css';  // some problem with the CSS import

/* <Switch> deprecated for <Routes>
  https://stackoverflow.com/questions/69843615/switch-is-not-exported-from-react-router-dom
*/
function App() {
  return (
    <>
      <h1>Server-Side Rendering Example</h1>
      <nav>
        <ul className='list-inline'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/articles">Articles</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
      <CounterButton />
    </>
  );
}

export default App;
