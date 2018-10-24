import { Button } from "@blueprintjs/core";
import * as React from 'react';
import {JLButtonStyle} from '../componentStyle/JLButtonStyle'


export interface IJLButtonProps {
  text: string;
  onClick: Function;
  type?: 'warning'|'success'|'neutral'; //neutral is default 
  disabled?: boolean; //false is default
}

export interface IJLButtonState {}

export class JLButton extends React.Component<
  IJLButtonProps,
  IJLButtonState
> {

  constructor(props:any) {
    super(props)
  }

  render() {
    console.log(this.props.disabled)
    return(
      <Button
      className={JLButtonStyle((this.props.type)?this.props.type:'neutral', this.props.disabled)}
      text={this.props.text}
      onClick={(event => this.props.onClick(event))}/>
    )
  }
}

/*TODO
  - add options for non-capitalized text
  - add options for small buttons (like ones in git extension)
  - add options for other custom colors
*/