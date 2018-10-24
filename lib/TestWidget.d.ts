import { VDomRenderer, VDomModel } from '@jupyterlab/apputils';
import * as React from 'react';
import { JupyterLab } from '@jupyterlab/application';
export default class TestWidget extends VDomRenderer<VDomModel> {
    reactComponent: React.ReactElement<any>;
    app: JupyterLab;
    constructor(app: JupyterLab);
    protected onUpdateRequest(): void;
    render(): React.ReactElement<any>;
}
