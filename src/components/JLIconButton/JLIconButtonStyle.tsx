import { style } from 'typestyle/lib';

export function JLIconButtonStyle(w: number, h: number) {
  let width = 'auto';
  if(w) { width = w.toString() + 'px' }

  let height = 'auto';
  if(h) { height = h.toString() + 'px' }

  return(
    style({
      width: width,
      height: height,
      
      background: 'var(--jp-layourt-color1)',
      border: 'none',
      boxSizing: 'border-box',
      outline:'none',
      "-webkit-appearance": 'none',
      padding: '0px 6px',
      margin: '0px',
      borderRadius: 'var(--jp-border-radius)',
      display: 'flex',
      alignItems: 'center',
    
      $nest: {
        '&:focus': {
          background: 'var(--jp-layout-color2)'
        },
    
        '&:hover': {
          background: 'var(--jp-layout-color2)'
        },
    
        '&:active': {
          background: 'var(--jp-layout-color3)'
        },
    
        '&:disabled': {
          opacity: 0.4
        }
      }
    })
  )
}