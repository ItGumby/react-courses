import React, { useState, lazy, Suspense } from 'react';
import ErrorBoundary from '../ErrorBoundary';

// traditional "big ball of JS" import
// import CodeSplittingExample from '../components/CodeSplittingExample';
// alternate code-splittting via lazy load of module
const CodeSplittingExample = lazy(() => import('../components/CodeSplittingExample'));

export const About = () => {
  const [showComps, setShowComps] = useState(false);

  return (
    <>
      <h1>About</h1>
      {showComps && (
        <ErrorBoundary fallback={<><h3>Errah!</h3><p>about page error-boundary</p></>}>
          <Suspense fallback={<p>loading...</p>}>
            <CodeSplittingExample />
            <p>some rando content</p>
            <CodeSplittingExample />
          </Suspense>
        </ErrorBoundary>
      )}
      <button onClick={() => setShowComps(true)}>Show Lazy Compontents</button>
    </>
  );
}

export default About;
