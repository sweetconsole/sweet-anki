import { forwardRef } from "react"
import type { IField } from "./field.types.ts"
import styles from "./Field.module.scss"

const Field = forwardRef<HTMLInputElement, IField>(
	({ label, placeholder, error, type, ...rest }, ref) => {
		return (
			<label className={styles.label}>
				{label}
				<input
					className={
						error ? [styles.input, styles.input_error].join(" ") : styles.input
					}
					type={type}
					placeholder={placeholder}
					ref={ref}
					{...rest}
				/>
				{error && <p className={styles.error}>{error}</p>}
			</label>
		)
	}
)

export default Field
