import React from "react";

const CodeSplittingExample =() => {
  // trigger an error, simulating network error of lazy-loading
  // throw new Error('help!');

  return (
    <p>this component will be separated from the app</p>
  );
}

export default CodeSplittingExample;
