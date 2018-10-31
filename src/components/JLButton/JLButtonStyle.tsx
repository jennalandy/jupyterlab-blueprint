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
      background: color,
      border: '1px solid '+color,

      color: 'white',
      textTransform: 'uppercase',
      textAlign: 'center',
      letterSpacing: '0.8px',
      
      boxSizing: 'border-box',
      height: '32px',
      marginRight: '12px',
      padding:'0px 12px',
      outline: 'none',
      "-webkit-appearance": 'none',
      borderRadius: 'var(--jp-border-radius)',

      $nest: {
        '& .ms-Button-textContainer': {
          fontSize: 'var(--jp-ui-font-size1)',
          letterSpacing: '0.8px',
          lineHeight: '32px',
          fontWeight: 400
        },

        '&:active': {
          background: color,
          border: '1px solid '+color,
          color: 'white',
        }
      }
    })
  )
} 