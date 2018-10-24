import { Button } from "@blueprintjs/core";
import * as React from 'react';
import {JLIconButtonStyle} from '../componentStyle/JLIconButtonStyle'
import {JLIcon} from '../components/JLIcon'

export interface IJLIconButtonProps {
  icon: string;
  onClick: Function;
  disabled?: boolean; //false is default
}

export interface IJLIconButtonState {}

export class JLIconButton extends React.Component<
  IJLIconButtonProps,
  IJLIconButtonState
> {

  constructor(props:any) {
    super(props)
  }

  render() {
    console.log(this.props.disabled)
    return(
      <Button
      className={JLIconButtonStyle}
      icon={<JLIcon icon = {this.props.icon}/>}
      onClick={(event => this.props.onClick(event))}/>
    )
  }
}
