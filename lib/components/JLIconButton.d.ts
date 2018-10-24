import * as React from 'react';
export interface IJLIconButtonProps {
    icon: string;
    onClick: Function;
    disabled?: boolean;
}
export interface IJLIconButtonState {
}
export declare class JLIconButton extends React.Component<IJLIconButtonProps, IJLIconButtonState> {
    constructor(props: any);
    render(): JSX.Element;
}
