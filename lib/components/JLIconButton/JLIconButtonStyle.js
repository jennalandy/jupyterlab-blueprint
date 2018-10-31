"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("typestyle/lib");
function JLIconButtonStyle(w, h) {
    let width = 'auto';
    if (w) {
        width = w.toString() + 'px';
    }
    let height = 'auto';
    if (h) {
        height = h.toString() + 'px';
    }
    return (lib_1.style({
        width: width,
        height: height,
        background: 'var(--jp-layourt-color1)',
        border: 'none',
        boxSizing: 'border-box',
        outline: 'none',
        "-webkit-appearance": 'none',
        padding: '0px 6px',
        margin: '0px',
        borderRadius: 'var(--jp-border-radius)',
        display: 'flex',
        alignItems: 'center',
        $nest: {
            '&:focus': {
                background: 'var(--jp-layout-color2)'
            },
            '&:hover': {
                background: 'var(--jp-layout-color2)'
            },
            '&:active': {
                background: 'var(--jp-layout-color3)'
            },
            '&:disabled': {
                opacity: 0.4
            }
        }
    }));
}
exports.JLIconButtonStyle = JLIconButtonStyle;
