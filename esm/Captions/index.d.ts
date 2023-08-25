import React, { ReactNode } from 'react';
interface props {
    list?: Array<String>;
    speed?: number;
    color?: string;
    textStyle: Object;
    isStop?: Boolean;
    onMouseLeave: (index: number) => void;
    onMouseOver: (index: number) => void;
    onClick: (index: number) => void;
    children?: ReactNode;
}
declare const _default: ({ list, speed, color, textStyle, isStop, onMouseLeave, onMouseOver, onClick, children, }: props) => React.JSX.Element;
export default _default;
