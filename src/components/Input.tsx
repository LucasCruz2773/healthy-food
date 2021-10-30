import { InputHTMLAttributes } from "react"

import '../styles/input.css'

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
    return(
        <input className="input-food" {...props}></input>
    )
}