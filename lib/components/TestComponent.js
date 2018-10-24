"use strict";
//A PANEL TO USE IN TESTING JUPTYERLAB-BLUEPRINT COMPONENTS
//REMOVE IN RELEASE
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const lib_1 = require("typestyle/lib");
const JLButton_1 = require("./JLButton");
const JLIconButton_1 = require("./JLIconButton");
exports.Test = lib_1.style({
    padding: '10px'
});
exports.Section = lib_1.style({
    padding: '10px'
});
class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.click = () => { console.log('clicked'); };
    }
    render() {
        return (React.createElement("div", { className: exports.Test },
            React.createElement("h1", null, "Testing Panel"),
            React.createElement("div", { className: exports.Section },
                React.createElement(JLButton_1.JLButton, { text: "I'm a success button", onClick: this.click, type: 'success' }),
                React.createElement(JLButton_1.JLButton, { text: "I'm a disabled success button", onClick: this.click, type: 'success', disabled: true })),
            React.createElement("div", { className: exports.Section },
                React.createElement(JLButton_1.JLButton, { text: "I'm a warning button", onClick: this.click, type: 'warning', disabled: false }),
                React.createElement(JLButton_1.JLButton, { text: "I'm a disabled warning button", onClick: this.click, type: 'warning', disabled: true })),
            React.createElement("div", { className: exports.Section },
                React.createElement(JLButton_1.JLButton, { text: "I'm neutral", onClick: this.click, type: 'neutral' }),
                React.createElement(JLButton_1.JLButton, { text: "I'm disabled neutral", onClick: this.click, type: 'neutral', disabled: true })),
            React.createElement("div", { className: exports.Section },
                React.createElement(JLIconButton_1.JLIconButton, { icon: 'var(--jp-icon-save)', onClick: this.click }))));
    }
}
exports.TestComponent = TestComponent;
