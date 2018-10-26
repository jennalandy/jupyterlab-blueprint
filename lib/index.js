"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apputils_1 = require("@jupyterlab/apputils");
const TestWidget_1 = require("./TestWidget");
require("../style/variables.css");
/** Main plugin for extension */
//A PANEL TO USE IN TESTING JUPTYERLAB-BLUEPRINT COMPONENTS
//REMOVE IN RELEASE
const plugin = {
    id: '@jupyterlab/jupyterlab-test-blueprint:plugin',
    requires: [apputils_1.ICommandPalette],
    activate: (app, palette) => {
        const widget = new TestWidget_1.default(app);
        widget.id = 'jupyterlab-test-blueprint';
        widget.title.label = 'Test Blueprint';
        widget.title.closable = true;
        const command = 'test-blueprint:open';
        app.commands.addCommand(command, {
            label: 'Test Blueprint',
            execute: () => {
                if (!widget.isAttached) {
                    /** Attach the widget to the main work area if it's not there */
                    app.shell.addToMainArea(widget);
                }
                else {
                    widget.update();
                }
                /** Activate the widget */
                app.shell.activateById(widget.id);
            }
        });
        /** Add command to command palette */
        palette.addItem({ command, category: '0Test' });
    },
    autoStart: true
};
/** Export the plugin as default */
exports.default = plugin;
