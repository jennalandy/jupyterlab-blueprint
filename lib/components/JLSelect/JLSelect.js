"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Fabric_1 = require("office-ui-fabric-react/lib/Fabric");
const Dropdown_1 = require("office-ui-fabric-react/lib/Dropdown");
const JLSelectStyle_1 = require("./JLSelectStyle");
exports.JLSelect = (props) => (React.createElement(Fabric_1.Fabric, null,
    React.createElement(Dropdown_1.Dropdown, { className: JLSelectStyle_1.JLSelectStyle, options: props.options, defaultSelectedKeys: [props.default] })));
