import * as React from 'react';
import {JLIconStyle} from './JLIconStyle'

export interface IJLIconProps {
  icon?: string;
  text?: string;
}

export const JLIcon = (props: IJLIconProps) =>
  <span className={JLIconStyle(props.icon)}>{(props.text)?props.text:''}</span>


/* NOTE
   Blueprint documentations states
     *   If given a `JSX.Element`, that element will be rendered and _all other
     *   props on this component are ignored._ This type is supported to
     *   simplify icon support in other Blueprint components. As a consumer, you
     *   should avoid using `<Icon icon={<Element />}` directly; simply render
     *   `<Element />` instead.
   
   Not sure if we should use the Blueprint Icon class, since it requires a known 
   blueprint IconName string.
*/