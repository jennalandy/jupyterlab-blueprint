import { Button, IButtonProps } from "@blueprintjs/core";
import * as React from 'react';
import {JLIconButtonStyle} from './JLIconButtonStyle'

export interface IJLIconButtonProps extends IButtonProps {
  width?: number,   
  /*Default width is 28px (default width of notebook toolbar button)
  * use width = 50 to match width of filebrowser toolbar buttons */
  
  height?: number   
  /*Default height is 24px (default height of notebbok and 
  * filebrowser toolbar buttons) */
}

export const JLIconButton = (props: IJLIconButtonProps) =>
  <Button {...props} className={JLIconButtonStyle(props.width, props.height)}/>