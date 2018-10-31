import {style} from 'typestyle'

export const JLTagContainerStyle = style({
    backgroundColor: 'var(--jp-layout-color2)',
    borderRadius: 20,
    boxSizing: 'border-box',
    margin: 3,
    maxWidth: 'calc(100% - 25px)',
    outline: 'none',
    padding: '10px',
    paddingBottom: '4px',
    paddingTop: '7px',
    width: 'fit-content'
})

export const JLTagStyle = style({
    display: 'block',
})

export function JLTagTextStyle(removable: boolean) {
    let paddingRight: string = removable ? '25px' : '0px'
    return(
        style({
            boxSizing: 'border-box',
            display: 'inline-block',
            marginBottom: '0px',
            marginTop: '-1px',
            maxWidth: '100%',
            overflow: 'hidden',
            paddingRight: paddingRight,
            paddingTop: '0px',
            textOverflow: 'ellipsis'
        })
    )
} 

export const JLTagRemoveContainerStyle = style({
    position: 'absolute'
})

export const JLTagRemoveStyle = style({
    height: '13px',
    marginBottom: '-1px',
    marginLeft: '10px',
    marginTop: '2px',
    position: 'absolute',
    right: '0px'
})