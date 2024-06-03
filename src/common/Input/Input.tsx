import React from "react";

export default function Input(props: any) {
    return (<input id={props.id} type={props.inputType}>
        <label>{props.inputText}</label>
    </input>)
}