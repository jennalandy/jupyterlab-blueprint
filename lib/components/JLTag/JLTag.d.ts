import * as React from 'react';
export interface IJLTagProps {
    text: string;
    removable?: boolean;
    onRemove?: (event: React.MouseEvent<HTMLImageElement>) => void;
}
export declare class JLTag extends React.Component<IJLTagProps, {}> {
    render(): JSX.Element;
}
