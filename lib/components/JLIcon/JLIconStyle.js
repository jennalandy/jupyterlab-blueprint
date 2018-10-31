"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("typestyle/lib");
function JLIconStyle(icon) {
    return (lib_1.style({
        padding: 0,
        flex: '0 0 auto',
        backgroundImage: icon,
        minWidth: '16px',
        minHeight: '16px',
        lineHeight: '16px',
        backgroundSize: '16px',
        display: 'inline-block',
        verticalAlign: 'middle',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        margin: 'auto'
    }));
}
exports.JLIconStyle = JLIconStyle;
