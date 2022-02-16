import React from 'react';
import propTypes from 'prop-types';

const Message = (props) => {
  const { display, message, cssClass } = props;
  return (
    <div style={{ display }} className={cssClass}>{message}</div>
  );
};

Message.propTypes = {
  display: propTypes.string.isRequired,
  message: propTypes.string.isRequired,
  cssClass: propTypes.string.isRequired,
};

export default Message;
