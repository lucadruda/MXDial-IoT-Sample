import React from 'react';
import styled from 'styled-components';
import StyledButton from './styled/button';
const Styled = styled.div`
  &.reset-app {
    padding: 0 20%;
    text-align: center;

    p {
      color: #02a3ee;
      font-family: SegoeUISemilight, 'Helvetica Neue', Helvetica, Arial,
        sans-serif;
      font-size: 36px;
      margin: 16vh 0 10vh;
    }
    .actions {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const ResetApp = ({
  onAccept,
  onCancel
}) => /*#__PURE__*/React.createElement(Styled, {
  className: "reset-app"
}, /*#__PURE__*/React.createElement("p", null, "Are you sure you want to reset the demo?"), /*#__PURE__*/React.createElement("div", {
  className: "actions"
}, /*#__PURE__*/React.createElement(StyledButton, {
  className: "in-modal",
  onClick: onAccept
}, "Yes"), /*#__PURE__*/React.createElement(StyledButton, {
  className: "in-modal",
  onClick: onCancel
}, "No")));

export default ResetApp;