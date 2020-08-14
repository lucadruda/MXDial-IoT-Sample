import React from 'react';
import styled from 'styled-components';

const imageScale = require('../icons/accelerometer_scale.svg');

const Styled = styled.div`
  &.round-gauge {
    position: relative;

    .scale {
      width: 100%;
    }
    .dial {
      position: absolute;
      top: 0;
      left: 0;
      fill: ${props => props.color};
      transition: transform 0.6s;
    }

    .caption {
      width: 100%;
      position: absolute;
      bottom: 5%;
      left: 0;
      text-align: center;
      color: ${props => props.color};
      font-size: 1.8rem;
      font-style: normal;
      line-height: 1.2;

      b,
      span {
        display: block;
        line-height: 1.1;
      }
      span {
        font-family: SegoeUILight, 'Helvetica Neue', Helvetica, Arial,
          sans-serif;
      }

      &.temperature {
        b, span {
          display: inline-block;
        }
        b {
          width: 2.2rem;
          text-align: right;
        }
      }
    }
  }
`;

const RoundGauge = ({
  color,
  dialRotation,
  dialValue,
  label,
  isTemperature
}) => {
  const dialStyle = {
    transform: `rotate(${dialRotation}deg)`
  };
  const valueInCelsius = isTemperature && Math.round((dialValue - 32) * 5 / 9);
  return /*#__PURE__*/React.createElement(Styled, {
    className: "round-gauge",
    color: color
  }, /*#__PURE__*/React.createElement("img", {
    className: "scale",
    src: imageScale,
    alt: ""
  }), /*#__PURE__*/React.createElement("svg", {
    className: "dial",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 280 280",
    style: dialStyle
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "140",
    cy: "140.33",
    r: "10.57"
  })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
    points: "140.92,49.02 139.08,49.02 133.44,140.33 146.56,140.33"
  })))), isTemperature ? /*#__PURE__*/React.createElement("div", {
    className: "caption temperature"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, dialValue), /*#__PURE__*/React.createElement("span", null, "\xB0F")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, valueInCelsius), /*#__PURE__*/React.createElement("span", null, "\xB0C"))) : /*#__PURE__*/React.createElement("div", {
    className: "caption"
  }, /*#__PURE__*/React.createElement("b", null, dialValue), /*#__PURE__*/React.createElement("span", null, label)));
};

export default RoundGauge;