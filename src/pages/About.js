import React, { lazy, Suspense } from 'react';

// traditional "big ball of JS" import
// import CodeSplittingExample from '../components/CodeSplittingExample';
// alternate code-splittting via lazy load of module
const CodeSplittingExample = lazy(() => import('../components/CodeSplittingExample'));

export const About = () => {
  return (
    <>
      <h1>About</h1>
      <Suspense fallback={<p>loading...</p>}>
        <CodeSplittingExample />
      </Suspense>
    </>
  );
}
