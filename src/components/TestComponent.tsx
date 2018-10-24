//A PANEL TO USE IN TESTING JUPTYERLAB-BLUEPRINT COMPONENTS
//REMOVE IN RELEASE

import * as React from 'react';

import {JLButton} from './JLButton'

export interface ITestComponentProps {}

export interface ITestComponentState{}

export class TestComponent extends React.Component<
  ITestComponentProps,
  ITestComponentState
> {

  constructor(props:any) {
    super(props)
  }

  render() {
    return(
      <div>
        <h1>Testing Panel</h1>
        <JLButton text="I'm a success button" onClick={() => {console.log('clicked')}} type={'success'}/>
        <JLButton text="I'm a disabled success button" onClick={() => {console.log('clicked')}} type={'success'} disabled={true}/>
        <JLButton text="I'm a warning button" onClick={() => {console.log('clicked')}} type={'warning'}/>
        <JLButton text="I'm neutral" onClick={() => {console.log('clicked')}} type={'neutral'}/>
      </div>
    )
  }

}