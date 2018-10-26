/// <reference types="react" />
import { IButtonProps } from "@blueprintjs/core";
export interface IJLButtonProps extends IButtonProps {
    type?: 'warning' | 'success' | 'neutral';
    disabled?: boolean;
}
export declare const JLButton: (props: IJLButtonProps) => JSX.Element;
