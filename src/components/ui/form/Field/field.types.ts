import { type InputHTMLAttributes } from "react"

interface IFieldProps {
	label: string
	placeholder: string
	type: string
	error: string | undefined
}

type TypeFieldProps = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export type IField = TypeFieldProps
