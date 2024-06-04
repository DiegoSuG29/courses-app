import React from "react";

interface InputProps {
    name: string,
    inputText: string,
    className: string,
    type: string,
    onChange: any,
    value?: string,
};

export default function Input(props: InputProps) {
    return (<>
        <input name={props.name} type={props.type} placeholder={props.inputText} className={props.className} onChange={props.onChange} value={props.value} />
        <label></label>
    </>)
}