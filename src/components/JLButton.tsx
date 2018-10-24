import { Button } from "@blueprintjs/core";
import * as React from 'react';
import {JLButtonStyle} from '../componentStyle/JLButtonStyle'


export interface IJLButtonProps {
  text: string;
  onClick: Function;
  type: 'warning'|'success'|'neutral';
  disabled?: boolean;
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
      className={JLButtonStyle(this.props.type, this.props.disabled)}
      text={this.props.text}
      onClick={(event => this.props.onClick(event))}/>
    )
  }
}
