import { TStyleButton } from '@/types'
import React from 'react'
import { ButtonSC } from './styles.button'



type ButtonProps = {
	children: React.ReactNode
	style?: TStyleButton
	primary?: boolean
	width?: string
	onClick?: (() => void | null) | (() => Promise<void> | null)
	disabled?: boolean
	gap?: string
	type?: 'submit' | 'button'
}

const Button = (props: ButtonProps) => {
	const {
		children,
		primary = true,
		width = '100%',
		onClick = null,
		disabled = false,
		style = 'simple',
		gap,
		type = 'button',
	} = props

	const handleClick = (e: any) => {
		if (onClick) {
			onClick()
		}
	}
	return (
		<>
			<ButtonSC
				// $primary={primary}
				// $width={width}
				onClick={handleClick}
				disabled={disabled}
				$disabled={disabled}
				$style={style}
				type={type}
			>
				{children}
			</ButtonSC>
		</>
	)
}

export default Button
