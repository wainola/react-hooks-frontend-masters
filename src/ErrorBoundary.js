import React from "react";
import { Link, Redirect } from "@reach/router";

class ErroBoundary extends React.Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an erro", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with the listing. <Link to="/"> Click here</Link>{" "}
          to go back to the home page or wait five seconds
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErroBoundary;
