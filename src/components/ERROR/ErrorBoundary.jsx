import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          backgroundColor: '#333', 
          padding: "2rem", 
          color: "#f5f5f5",
          height: '100dvh',
          width: '100vw',
          fontFamily: 'Inter, sans-serif',
          }}>
          <h2>Something went wrong.</h2>
          <p>There was an error or this page has been moved.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
