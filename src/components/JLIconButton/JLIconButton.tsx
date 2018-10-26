import { Button, IButtonProps } from "@blueprintjs/core";
import * as React from 'react';
import {JLIconButtonStyle} from './JLIconButtonStyle'

export const JLIconButton = (props: IButtonProps) =>
  <Button {...props} className={JLIconButtonStyle}/>