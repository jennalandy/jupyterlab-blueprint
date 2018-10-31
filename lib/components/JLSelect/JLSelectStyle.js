"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("typestyle/lib");
exports.JLSelectStyle = lib_1.style({
    width: '272px',
    fontFamily: 'var(--jp-ui-font-family)',
    fontSize: 'var(--jp-ui-font-size1)',
    $nest: {
        '& .ms-Dropdown-title': {
            $nest: {
                '&:active': {
                    border: '1px solid var(--jp-brand-color1)'
                }
            }
        }
    }
});
