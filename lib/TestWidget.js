"use strict";
//A PANEL TO USE IN TESTING JUPTYERLAB-BLUEPRINT COMPONENTS
//REMOVE IN RELEASE
Object.defineProperty(exports, "__esModule", { value: true });
const apputils_1 = require("@jupyterlab/apputils");
const React = require("react");
const TestComponent_1 = require("./components/TestComponent");
const ReactDOM = require("react-dom");
class TestWidget extends apputils_1.VDomRenderer {
    constructor(app) {
        super();
        this.app = app;
    }
    onUpdateRequest() {
        this.reactComponent =
            React.createElement(TestComponent_1.TestComponent, null);
        ReactDOM.render(this.reactComponent, document.getElementById('jupyterlab-test-blueprint'));
        this.render();
    }
    render() {
        return this.reactComponent;
    }
}
exports.default = TestWidget;
