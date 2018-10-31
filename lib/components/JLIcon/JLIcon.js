"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const JLIconStyle_1 = require("./JLIconStyle");
exports.JLIcon = (props) => React.createElement("span", { className: JLIconStyle_1.JLIconStyle(props.icon) }, (props.text) ? props.text : '');
/* NOTE
   Blueprint documentations states
     *   If given a `JSX.Element`, that element will be rendered and _all other
     *   props on this component are ignored._ This type is supported to
     *   simplify icon support in other Blueprint components. As a consumer, you
     *   should avoid using `<Icon icon={<Element />}` directly; simply render
     *   `<Element />` instead.
   
   Not sure if we should use the Blueprint Icon class, since it requires a known
   blueprint IconName string.
*/ 
