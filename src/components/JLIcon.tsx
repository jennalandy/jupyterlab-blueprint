import * as React from 'react';
import {JLIconStyle} from '../componentStyle/JLIconStyle'

export interface IJLIconProps {
  icon: string;
}

export interface IJLIconState {}

export class JLIcon extends React.Component<
  IJLIconProps,
  IJLIconState
> {

  constructor(props:any) {
    super(props)
  }

  render() {
    return(
      <span className={JLIconStyle(this.props.icon)}/>
    )
  }
}
