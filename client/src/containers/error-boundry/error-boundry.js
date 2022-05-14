import React, { Component } from "react";
import ErrorIndicator from "../../components/error-indicator";
import PropTypes from "prop-types";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false
  };
  componentDidCatch() {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) return <ErrorIndicator />;
    else return this.props.children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};
ErrorBoundary.defaultProps = {
  children: <p>no children</p>
};
