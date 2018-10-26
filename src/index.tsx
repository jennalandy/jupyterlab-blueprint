import { JupyterLab, JupyterLabPlugin } from '@jupyterlab/application';

import { ICommandPalette, VDomRenderer, VDomModel } from '@jupyterlab/apputils';

import { Widget } from '@phosphor/widgets';

import TestWidget from './TestWidget';

import '../style/variables.css';

/** Main plugin for extension */
//A PANEL TO USE IN TESTING JUPTYERLAB-BLUEPRINT COMPONENTS
//REMOVE IN RELEASE
const plugin: JupyterLabPlugin<void> = {
  id: '@jupyterlab/jupyterlab-test-blueprint:plugin',
  requires: [ICommandPalette],
  activate: (
    app: JupyterLab,
    palette: ICommandPalette,
  ): void => {
    const widget: VDomRenderer<VDomModel> = new TestWidget(app);

    widget.id = 'jupyterlab-test-blueprint';
    widget.title.label = 'Test Blueprint';
    widget.title.closable = true;

    const command: string = 'test-blueprint:open';
    app.commands.addCommand(command, {
      label: 'Test Blueprint',
      execute: () => {
        if (!widget.isAttached) {
          /** Attach the widget to the main work area if it's not there */
          app.shell.addToMainArea(widget as Widget);
        } else {
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
export default plugin;
