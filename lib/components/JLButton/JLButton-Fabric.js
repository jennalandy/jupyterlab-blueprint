"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Fabric_1 = require("office-ui-fabric-react/lib/Fabric");
const Button_1 = require("office-ui-fabric-react/lib/Button");
const JLButtonStyle_1 = require("./JLButtonStyle");
exports.JLButtonFabric = (props) => (React.createElement(Fabric_1.Fabric, null,
    React.createElement(Button_1.DefaultButton, { className: JLButtonStyle_1.JLButtonStyle(props.type, props.disabled) }, props.text)));
