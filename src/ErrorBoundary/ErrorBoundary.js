import React, { Component } from 'react';

//an error boundary component that catches errors and handles it well 
class ErrorBoundary extends Component {
    state = {
      hasError: false,
      errorMessage: ''
    }


    // new method which receives potienal error and addiontal information automatically by React.
    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }

    render() {
        if (this.state.hasError) {
         return <h1>{this.state.errorMessage}</h1>;
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;