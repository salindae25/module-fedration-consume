import React from 'react';

const FormRui = ({
  text,
  link
}) => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, text), /*#__PURE__*/React.createElement("i", {
    style: {
      color: 'blue'
    }
  }, link));
};

export default FormRui;