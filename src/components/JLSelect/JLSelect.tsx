 import * as React from 'react'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown'
import {JLSelectStyle} from './JLSelectStyle'

export interface IJLSelectProps {
    options: IDropdownOption[],
    default: string
}

export const JLSelect = (props: IJLSelectProps) => (
    <Fabric>
        <Dropdown 
            className={JLSelectStyle}
            options={props.options}
            defaultSelectedKeys={[props.default]}
        />
    </Fabric>
)
