import { style } from 'typestyle/lib';

export function JLIconStyle(icon: string) {
    return(
        style({
            padding: 0,
            flex: '0 0 auto',
            backgroundImage: icon,
            minWidth: '16px',
            minHeight: '16px',
            lineHeight: '16px',
            backgroundSize: '16px',
            display: 'inline-block',
            verticalAlign: 'middle',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            margin: 'auto'
        })
    )
}