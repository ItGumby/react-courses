import React from "react";

// https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
  // NOTE: in dev/localhost will see big stack traces but prod will be "caught"

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error({error, info});
    // log service info.componentStack (like a Java StackTrace)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ? this.props.fallback : <p>Oops! Something wrong</p>;
    }
    return this.props.children;
  }
}
