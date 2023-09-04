import React, { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { CounterButton } from './components/CounterButton';
import { CounterProvider } from './components/CounterProvider';
import { SharedCounterButton } from './components/SharedCounterButton';

import { Provider } from 'react-redux';
import { store } from './store';
import { ReduxCounter } from './components/ReduxCounter';
//import './App.css';  // some problem with the CSS import

// import { Home } from './pages/Home';
const Home = lazy(() => import('./pages/Home'));
// import { About } from './pages/About';
const About = lazy(() => import('./pages/About'));
// import { Articles } from './pages/Articles';
const Articles = lazy(() => import('./pages/Articles'));

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
      <Suspense fallback={<p>lazy-load any given page...</p>}>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
      </Suspense>
      <CounterButton />

      <hr />
      <CounterProvider>
        <h2>Shared State Mgmt via Context</h2>
        <span>my shared context</span>
        <SharedCounterButton />
        <p>and again...</p>
        <SharedCounterButton />
      </CounterProvider>

      <hr />
      <Provider store={store}>
        <h2>State Mgmt via Redux</h2>
        <ReduxCounter />
        <p>and again ...</p>
        <ReduxCounter />
      </Provider>

    </>
  );
}

export default App;
