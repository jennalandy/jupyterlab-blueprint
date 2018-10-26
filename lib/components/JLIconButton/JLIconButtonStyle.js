"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("typestyle/lib");
exports.JLIconButtonStyle = lib_1.style({
    background: 'var(--jp-layourt-color1)',
    border: 'none',
    boxSizing: 'border-box',
    outline: 'none',
    "-webkit-appearance": 'none',
    padding: '0px 6px',
    margin: '0px',
    height: '24px',
    borderRadius: 'var(--jp-border-radius)',
    display: 'flex',
    alignItems: 'center',
    $nest: {
        '&:focus': {
            background: 'var(--jp-layout-color2)'
        },
        '&:enabled:hover': {
            background: 'var(--jp-layout-color2)'
        },
        '&:enabled:active': {
            background: 'var(--jp-layout-color3)'
        },
        '&:disabled': {
            opacity: 0.4
        }
    }
});
