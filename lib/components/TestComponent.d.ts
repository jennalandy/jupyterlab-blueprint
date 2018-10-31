import * as React from 'react';
export interface ITestComponentProps {
}
export interface ITestComponentState {
}
export declare const Test: string;
export declare const Section: string;
export declare class TestComponent extends React.Component<ITestComponentProps, ITestComponentState> {
    constructor(props: any);
    click: () => void;
    remove: () => void;
    render(): JSX.Element;
}
