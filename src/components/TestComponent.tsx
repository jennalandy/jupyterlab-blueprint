//A PANEL TO USE IN TESTING JUPTYERLAB-BLUEPRINT COMPONENTS
//REMOVE IN RELEASE

import * as React from 'react';

import {style} from 'typestyle/lib';

import {JLButton} from './JLButton/JLButton'
import {JLButtonFabric} from './JLButton/JLButton-Fabric'
import {JLIcon} from './JLIcon/JLIcon'
import{JLIconButton} from './JLIconButton/JLIconButton'
import {JLTag} from './JLTag/JLTag'
import {JLSelect} from './JLSelect/JLSelect'

import {DropdownMenuItemType} from 'office-ui-fabric-react/lib/Dropdown'

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
  remove = () => {console.log('removed')};


  render() {
    return(
      <div className={Test}>
        <h1>Testing Panel</h1>
        <div className={Section}>
          <p>Buttons: relies on Blueprint's Button component. Uses Typestyle. Not difficult to style over, 
            but also not much simpler than just using React as we have been. Might be better to stick with React
            so we don't have to rely on Blueprint and be forced to update whenever they do.
            </p>
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
          <p>Buttons: relies on Fabric's Button component. 
            Uses Typestyle. Would have to over-write Fabric's CSS 
            to get styling to match exactly. Definitely easier to write our own React components or use Blueprint.
          </p>
          <JLButtonFabric text="I'm a success button" onClick={this.click} type={'success'}/>
        </div>
        <div className = {Section}>
          <p>Icon: Does not rely on Blueprint.</p>
          <JLIcon icon='var(--jp-icon-save)'/>
        </div>
        <div className = {Section}>
          <p>Icon Button: Uses Blueprint with an element of the Icon class (above) as a prop</p>
          <JLIconButton icon={<JLIcon icon='var(--jp-icon-save)'/>} onClick={this.click}/>
          <JLIconButton icon={<JLIcon icon='var(--jp-icon-new-folder)'/>} width={50} onClick={this.click}/>
          <JLIconButton text={'with text and height'} height={23} onClick={this.click}/>
        </div>
        <div className = {Section}>
          <p>Tag: React and Typestyle. Does not rely on Blueprint.</p>
          <JLTag text={"removable!"} removable={true} onRemove={this.remove}/>
          <JLTag text={"not"}/>
        </div>
        <div className={Section}>
          <p>Select: Uses Fabric and Typestyle. Doesn't center at selected like native one currently in use does.</p>
          <JLSelect options={[
            {key: 'Header', text:'Actions', itemType: DropdownMenuItemType.Header},
            {key: 'A', text:'None'},
            {key: 'B', text:'Option A'},
            {key: 'C', text:'Option B'},
            {key: 'D', text:'Option C'}
          ]}
          default={'A'}/>
        </div>
      </div>
    )
  }

}