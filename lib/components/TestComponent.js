"use strict";
//A PANEL TO USE IN TESTING JUPTYERLAB-BLUEPRINT COMPONENTS
//REMOVE IN RELEASE
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const lib_1 = require("typestyle/lib");
const JLButton_1 = require("./JLButton/JLButton");
const JLButton_Fabric_1 = require("./JLButton/JLButton-Fabric");
const JLIcon_1 = require("./JLIcon/JLIcon");
const JLIconButton_1 = require("./JLIconButton/JLIconButton");
const JLTag_1 = require("./JLTag/JLTag");
const JLSelect_1 = require("./JLSelect/JLSelect");
const Dropdown_1 = require("office-ui-fabric-react/lib/Dropdown");
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
        this.remove = () => { console.log('removed'); };
    }
    render() {
        return (React.createElement("div", { className: exports.Test },
            React.createElement("h1", null, "Testing Panel"),
            React.createElement("div", { className: exports.Section },
                React.createElement("p", null, "Buttons: relies on Blueprint's Button component. Uses Typestyle. Not difficult to style over, but also not much simpler than just using React as we have been. Might be better to stick with React so we don't have to rely on Blueprint and be forced to update whenever they do."),
                React.createElement(JLButton_1.JLButton, { text: "I'm a success button", onClick: this.click, type: 'success' }),
                React.createElement(JLButton_1.JLButton, { text: "I'm a disabled success button", onClick: this.click, type: 'success', disabled: true })),
            React.createElement("div", { className: exports.Section },
                React.createElement(JLButton_1.JLButton, { text: "I'm a warning button", onClick: this.click, type: 'warning', disabled: false }),
                React.createElement(JLButton_1.JLButton, { text: "I'm a disabled warning button", onClick: this.click, type: 'warning', disabled: true })),
            React.createElement("div", { className: exports.Section },
                React.createElement(JLButton_1.JLButton, { text: "I'm neutral", onClick: this.click, type: 'neutral' }),
                React.createElement(JLButton_1.JLButton, { text: "I'm disabled neutral", onClick: this.click, type: 'neutral', disabled: true })),
            React.createElement("div", { className: exports.Section },
                React.createElement("p", null, "Buttons: relies on Fabric's Button component. Uses Typestyle. Would have to over-write Fabric's CSS to get styling to match exactly. Definitely easier to write our own React components or use Blueprint."),
                React.createElement(JLButton_Fabric_1.JLButtonFabric, { text: "I'm a success button", onClick: this.click, type: 'success' })),
            React.createElement("div", { className: exports.Section },
                React.createElement("p", null, "Icon: Does not rely on Blueprint."),
                React.createElement(JLIcon_1.JLIcon, { icon: 'var(--jp-icon-save)' })),
            React.createElement("div", { className: exports.Section },
                React.createElement("p", null, "Icon Button: Uses Blueprint with an element of the Icon class (above) as a prop"),
                React.createElement(JLIconButton_1.JLIconButton, { icon: React.createElement(JLIcon_1.JLIcon, { icon: 'var(--jp-icon-save)' }), onClick: this.click }),
                React.createElement(JLIconButton_1.JLIconButton, { icon: React.createElement(JLIcon_1.JLIcon, { icon: 'var(--jp-icon-new-folder)' }), width: 50, onClick: this.click }),
                React.createElement(JLIconButton_1.JLIconButton, { text: 'with text and height', height: 23, onClick: this.click })),
            React.createElement("div", { className: exports.Section },
                React.createElement("p", null, "Tag: React and Typestyle. Does not rely on Blueprint."),
                React.createElement(JLTag_1.JLTag, { text: "removable!", removable: true, onRemove: this.remove }),
                React.createElement(JLTag_1.JLTag, { text: "not" })),
            React.createElement("div", { className: exports.Section },
                React.createElement("p", null, "Select: Uses Fabric and Typestyle. Doesn't center at selected like native one currently in use does."),
                React.createElement(JLSelect_1.JLSelect, { options: [
                        { key: 'Header', text: 'Actions', itemType: Dropdown_1.DropdownMenuItemType.Header },
                        { key: 'A', text: 'None' },
                        { key: 'B', text: 'Option A' },
                        { key: 'C', text: 'Option B' },
                        { key: 'D', text: 'Option C' }
                    ], default: 'A' }))));
    }
}
exports.TestComponent = TestComponent;
