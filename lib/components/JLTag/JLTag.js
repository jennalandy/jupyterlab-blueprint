"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const JSTagStyle_1 = require("./JSTagStyle");
class JLTag extends React.Component {
    render() {
        return (React.createElement("div", { className: JSTagStyle_1.JLTagContainerStyle },
            React.createElement("div", { className: JSTagStyle_1.JLTagStyle },
                React.createElement("label", { className: JSTagStyle_1.JLTagTextStyle(this.props.removable) }, this.props.text),
                this.props.removable &&
                    React.createElement("label", { className: JSTagStyle_1.JLTagRemoveContainerStyle },
                        React.createElement("img", { className: JSTagStyle_1.JLTagRemoveStyle, alt: 'Remove Tag From Active Cell', title: 'Remove Tag From Active Cell', onClick: this.props.onRemove, src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEMzLjU4NCAwIDAgMy41ODQgMCA4QzAgMTIuNDE2IDMuNTg0IDE2IDggMTZDMTIuNDE2IDE2IDE2IDEyLjQxNiAxNiA4QzE2IDMuNTg0IDEyLjQxNiAwIDggMFpNMTIgOC44SDRWNy4ySDEyVjguOFoiIGZpbGw9IiM4MjgyODIiLz4KPC9zdmc+Cg==" })))));
    }
}
exports.JLTag = JLTag;
