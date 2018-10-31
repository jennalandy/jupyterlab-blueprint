import { style } from 'typestyle/lib';

export const JLSelectStyle = style({
    width: '272px',
    fontFamily: 'var(--jp-ui-font-family)',
    fontSize: 'var(--jp-ui-font-size1)',

    $nest: {
        '& .ms-Dropdown-title': {
            $nest: {
                '&:active': {
                    border: '1px solid var(--jp-brand-color1)'
                }
            }
        }
    }
})