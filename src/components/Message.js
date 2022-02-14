import React from 'react';
import propTypes from 'prop-types';

const Message = (props) => {
  const { display, message } = props;
  return (
    <div style={{ display }}>{message}</div>
  );
};

Message.propTypes = {
  display: propTypes.string.isRequired,
  message: propTypes.string.isRequired,
};

export default Message;
