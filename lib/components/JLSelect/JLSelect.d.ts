/// <reference types="react" />
import { IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
export interface IJLSelectProps {
    options: IDropdownOption[];
    default: string;
}
export declare const JLSelect: (props: IJLSelectProps) => JSX.Element;
