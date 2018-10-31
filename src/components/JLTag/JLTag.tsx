import * as React from 'react';
import {JLTagContainerStyle, JLTagStyle, JLTagTextStyle, JLTagRemoveStyle, JLTagRemoveContainerStyle} from './JSTagStyle'


export interface IJLTagProps {
  text: string;
  removable?: boolean;  //default false
  onRemove?: (event: React.MouseEvent<HTMLImageElement>) => void;
}

export class JLTag extends React.Component<IJLTagProps, {}> {
  render() {
    return(
      <div className={JLTagContainerStyle}>
        <div className={JLTagStyle}>
          <label className={JLTagTextStyle(this.props.removable)}>{this.props.text}</label>
          {this.props.removable && 
            <label className={JLTagRemoveContainerStyle}>
              <img className={JLTagRemoveStyle} 
                alt = 'Remove Tag From Active Cell' 
                title='Remove Tag From Active Cell' 
                onClick={this.props.onRemove}
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEMzLjU4NCAwIDAgMy41ODQgMCA4QzAgMTIuNDE2IDMuNTg0IDE2IDggMTZDMTIuNDE2IDE2IDE2IDEyLjQxNiAxNiA4QzE2IDMuNTg0IDEyLjQxNiAwIDggMFpNMTIgOC44SDRWNy4ySDEyVjguOFoiIGZpbGw9IiM4MjgyODIiLz4KPC9zdmc+Cg==">
              </img>
            </label>
          }
        </div>
      </div>
    )
  }
}