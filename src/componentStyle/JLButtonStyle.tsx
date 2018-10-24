import { style } from 'typestyle/lib';

export function JLButtonStyle(type: string, disabled: boolean){

  let color: string = disabled?'var(--md-grey-300)':'var(--md-grey-500)'
  if (type == 'success') {
    color=disabled?'var(--jp-brand-color3)':'var(--jp-brand-color1)';
  } else if (type == 'warning') {
    color=disabled?'var(--jp-error-color3)':'var(--jp-error-color1)';
  }

  return(
    style({
      marginRight: '12px',
      background: color,
      border: '1px solid '+color,
      color: 'white',
      fontSize: 'var(--jp-ui-font-size1)',
      boxSizing: 'border-box',
      textTransform: 'uppercase',
      textAlign: 'center',
      lineHeight: '32px',
      height: '32px',
      padding:'0px 12px',
      letterSpacing: '0.8px',
      outline: 'none',
      "-webkit-appearance": 'none',
      borderRadius: 'var(--jp-border-radius)'
    })
  )
} 