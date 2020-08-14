import React from 'react';
import styled from 'styled-components';

const imageLogo = require('../icons/microsoft_logo.svg');

const Styled = styled.div`
  display: flex;
  padding: 2vw 60px 0;

  img {
    width: 300px;
    margin-right: 50px;
  }

  h1 {
    font-size: 2.4rem;
    font-weight: normal;
    font-family: SegoeUISemilight, "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #c7c7c7;
    line-height: 1.2;
  }
`;

const Header = ({
  title
}) => /*#__PURE__*/React.createElement(Styled, {
  className: "header"
}, /*#__PURE__*/React.createElement("img", {
  src: imageLogo,
  alt: ""
}), /*#__PURE__*/React.createElement("h1", null, title));

export default Header;