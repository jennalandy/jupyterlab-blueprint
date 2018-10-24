"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@blueprintjs/core");
const React = require("react");
const JLIconButtonStyle_1 = require("../componentStyle/JLIconButtonStyle");
const JLIcon_1 = require("../components/JLIcon");
class JLIconButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.disabled);
        return (React.createElement(core_1.Button, { className: JLIconButtonStyle_1.JLIconButtonStyle, icon: React.createElement(JLIcon_1.JLIcon, { icon: this.props.icon }), onClick: (event => this.props.onClick(event)) }));
    }
}
exports.JLIconButton = JLIconButton;
