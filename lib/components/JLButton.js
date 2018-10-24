"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@blueprintjs/core");
const React = require("react");
const JLButtonStyle_1 = require("../componentStyle/JLButtonStyle");
class JLButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.disabled);
        return (React.createElement(core_1.Button, { className: JLButtonStyle_1.JLButtonStyle(this.props.type, this.props.disabled), text: this.props.text, onClick: (event => this.props.onClick(event)) }));
    }
}
exports.JLButton = JLButton;
