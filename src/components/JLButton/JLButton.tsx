import { Button, IButtonProps } from "@blueprintjs/core";
import * as React from 'react';
import {JLButtonStyle} from './JLButtonStyle'


export interface IJLButtonProps extends IButtonProps {
  type?: 'warning'|'success'|'neutral';  //neutral is default 
  disabled?: boolean;                    //false is default
}

export const JLButton = (props: IJLButtonProps) => 
  <Button {...props} className={JLButtonStyle(props.type, props.disabled)}/>


/*TODO
  - add options for non-capitalized text
  - add options for small buttons (like ones in git extension)
  - add options for other custom colors
*/