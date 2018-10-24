"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const JLIconStyle_1 = require("../componentStyle/JLIconStyle");
class JLIcon extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("span", { className: JLIconStyle_1.JLIconStyle(this.props.icon) }));
    }
}
exports.JLIcon = JLIcon;
