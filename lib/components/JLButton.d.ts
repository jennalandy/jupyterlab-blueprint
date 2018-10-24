import * as React from 'react';
export interface IJLButtonProps {
    text: string;
    onClick: Function;
    type?: 'warning' | 'success' | 'neutral';
    disabled?: boolean;
}
export interface IJLButtonState {
}
export declare class JLButton extends React.Component<IJLButtonProps, IJLButtonState> {
    constructor(props: any);
    render(): JSX.Element;
}
