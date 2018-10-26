"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@blueprintjs/core");
const React = require("react");
const JLButtonStyle_1 = require("./JLButtonStyle");
exports.JLButton = (props) => React.createElement(core_1.Button, Object.assign({}, props, { className: JLButtonStyle_1.JLButtonStyle(props.type, props.disabled) }));
/*TODO
  - add options for non-capitalized text
  - add options for small buttons (like ones in git extension)
  - add options for other custom colors
*/ 
