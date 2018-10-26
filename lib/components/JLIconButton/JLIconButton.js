"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@blueprintjs/core");
const React = require("react");
const JLIconButtonStyle_1 = require("./JLIconButtonStyle");
exports.JLIconButton = (props) => React.createElement(core_1.Button, Object.assign({}, props, { className: JLIconButtonStyle_1.JLIconButtonStyle }));
