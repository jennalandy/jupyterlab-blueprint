"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const JLButton_1 = require("./JLButton");
class TestComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Testing Panel"),
            React.createElement(JLButton_1.JLButton, { text: "I'm a success button", onClick: () => { console.log('clicked'); }, type: 'success' }),
            React.createElement(JLButton_1.JLButton, { text: "I'm a disabled success button", onClick: () => { console.log('clicked'); }, type: 'success', disabled: true }),
            React.createElement(JLButton_1.JLButton, { text: "I'm a warning button", onClick: () => { console.log('clicked'); }, type: 'warning' }),
            React.createElement(JLButton_1.JLButton, { text: "I'm neutral", onClick: () => { console.log('clicked'); }, type: 'neutral' })));
    }
}
exports.TestComponent = TestComponent;
