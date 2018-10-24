//A PANEL TO USE IN TESTING JUPTYERLAB-BLUEPRINT COMPONENTS
//REMOVE IN RELEASE

import { VDomRenderer, VDomModel } from '@jupyterlab/apputils';

import * as React from 'react'

import { JupyterLab } from '@jupyterlab/application';

import { TestComponent } from './components/TestComponent';


import * as ReactDOM from 'react-dom';

export default class TestWidget extends VDomRenderer<VDomModel> {
  reactComponent: React.ReactElement<any>;
  app: JupyterLab

  constructor(
    app: JupyterLab
  ) {
    super();
    this.app = app
  }

  protected onUpdateRequest(): void {
    this.reactComponent = 
      <TestComponent
      />
    ReactDOM.render(
      this.reactComponent, 
      document.getElementById('jupyterlab-test-blueprint')
    )
    this.render();
  }

  render() {
    return this.reactComponent
  }
}