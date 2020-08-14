import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

const iconClose = require(`../icons/close.svg`);

const Styled = styled.section`
  &.modal {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 100000;
    background-color: rgba(255, 255, 255, 0);
    transition: background-color ${props => props.animationLength};

    .modal {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      z-index: 100001;

      .icon-close {
        position: absolute;
        top: 15px;
        right: 15px;
        width: 2vw;
        max-width: 35px;
      }

      .container {
        position: relative;
        width: 60%;
        max-width: 656px;
        margin: 0 auto;
        box-shadow: 0px 0px 25px -4px rgba(0, 0, 0, 0.5);
        transform: scale(0.5);
        opacity: 0;
        transition: transform 0.5s ease-out 0s, opacity 0.3s linear 0.2s;
        background-color: #ffffff;
      }
    }

    &.visible {
      background-color: rgba(255, 255, 255, 0.6);

      .modal .container {
        transform: scale(1);
        opacity: 1;
      }
    }

    &.reset-modal {
      .modal .container {
        height: 60%;
        max-height: 620px;
      }
    }

    &.skip-overview-modal {
      .modal .container {
        max-width: none;
        width: auto;
      }
    }
  }
`;

const ModalComponent = ({
  className,
  children,
  isVisible,
  onCancel
}) => {
  const classes = classNames('modal', className, {
    visible: isVisible
  });
  return /*#__PURE__*/React.createElement(Styled, {
    className: classes
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("button", {
    className: "icon-close",
    onClick: onCancel
  }, /*#__PURE__*/React.createElement("img", {
    src: iconClose,
    alt: "Close modal"
  })), children)));
};

export default ModalComponent;