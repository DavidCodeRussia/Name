import React from 'react'
import s from "./FormsControls.module.css"

export const Form = ({input, meta, child, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {props.children}
            </div>

            { hasError && <span>{meta.error}</span> }

        </div>
    )
}

export const Textarea = (props) => {

    const {input, meta, ...restProps} = props;

    return <Form {...props}><textarea {...props.input} {...restProps} /></Form>
}

export const Input = (props) => {

    const {input, meta, ...restProps} = props;

    return <Form {...props}><input {...props.input} {...restProps} /></Form>
}
