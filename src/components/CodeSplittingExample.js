import React from "react";

const CodeSplittingExample =() => {
  // trigger an error, simulating network error of lazy-loading
  //throw new Error('trigger error simulating network error of lazy-loading!');

  return (
    <p>this component will be separated from the app</p>
  );
}

export default CodeSplittingExample;
