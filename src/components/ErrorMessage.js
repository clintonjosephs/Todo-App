import React from 'react';
import propTypes from 'prop-types';

const ErrorMessage = (props) => {
  const { display, message } = props;
  return (
    <div style={{ display }}>{message}</div>
  );
};

ErrorMessage.propTypes = {
  display: propTypes.string.isRequired,
  message: propTypes.string.isRequired,
};

export default ErrorMessage;
