"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typestyle_1 = require("typestyle");
exports.JLTagContainerStyle = typestyle_1.style({
    backgroundColor: 'var(--jp-layout-color2)',
    borderRadius: 20,
    boxSizing: 'border-box',
    margin: 3,
    maxWidth: 'calc(100% - 25px)',
    outline: 'none',
    padding: '10px',
    paddingBottom: '4px',
    paddingTop: '7px',
    width: 'fit-content'
});
exports.JLTagStyle = typestyle_1.style({
    display: 'block',
});
function JLTagTextStyle(removable) {
    let paddingRight = removable ? '25px' : '0px';
    return (typestyle_1.style({
        boxSizing: 'border-box',
        display: 'inline-block',
        marginBottom: '0px',
        marginTop: '-1px',
        maxWidth: '100%',
        overflow: 'hidden',
        paddingRight: paddingRight,
        paddingTop: '0px',
        textOverflow: 'ellipsis'
    }));
}
exports.JLTagTextStyle = JLTagTextStyle;
exports.JLTagRemoveContainerStyle = typestyle_1.style({
    position: 'absolute'
});
exports.JLTagRemoveStyle = typestyle_1.style({
    height: '13px',
    marginBottom: '-1px',
    marginLeft: '10px',
    marginTop: '2px',
    position: 'absolute',
    right: '0px'
});
