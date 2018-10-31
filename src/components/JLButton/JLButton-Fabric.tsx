import * as React from 'react'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button'
import { IJLButtonProps } from './JLButton'
import { JLButtonStyle } from './JLButtonStyle'

export const JLButtonFabric = (props: IJLButtonProps) => (
    <Fabric>
        <DefaultButton className={JLButtonStyle(props.type, props.disabled)}>
            {props.text}
        </DefaultButton>
    </Fabric>
)