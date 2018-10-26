//A PANEL TO USE IN TESTING JUPTYERLAB-BLUEPRINT COMPONENTS
//REMOVE IN RELEASE

import * as React from 'react';

import {style} from 'typestyle/lib';

import {JLButton} from './JLButton/JLButton'
import {JLIcon} from './JLIcon/JLIcon'
import{JLIconButton} from './JLIconButton/JLIconButton'

export interface ITestComponentProps {}

export interface ITestComponentState{}

export const Test = style({
  padding: '10px'
})

export const Section = style({
  padding:'10px'
})

export class TestComponent extends React.Component<
  ITestComponentProps,
  ITestComponentState
> {

  constructor(props:any) {
    super(props)
  }

  click = () => {console.log('clicked')};

  render() {
    return(
      <div className={Test}>
        <h1>Testing Panel</h1>
        <div className={Section}>
          <JLButton text="I'm a success button" onClick={this.click} type={'success'}/>
          <JLButton text="I'm a disabled success button" onClick={this.click} type={'success'} disabled={true}/>
        </div>
        <div className={Section}>
          <JLButton text="I'm a warning button" onClick={this.click} type={'warning'} disabled={false}/>
          <JLButton text="I'm a disabled warning button" onClick={this.click} type={'warning'} disabled={true}/>
        </div>
        <div className = {Section}>
          <JLButton text="I'm neutral" onClick={this.click} type={'neutral'}/>
          <JLButton text="I'm disabled neutral" onClick={this.click} type={'neutral'} disabled={true}/>
        </div>
        <div className = {Section}>
          <p>Icon</p>
          <JLIcon icon='var(--jp-icon-save)'/>
        </div>
        <div className = {Section}>
          <p>Icon Button</p>
          <JLIconButton icon={<JLIcon icon='var(--jp-icon-save)'/>} onClick={this.click}/>
        </div>
      </div>
    )
  }

}