'use client'

import { TStyleButton } from '@/types'
import styled, { css } from 'styled-components'

export const ButtonSC = styled.button<{
	$disabled: boolean
	$style: TStyleButton
}>`
	width: 100%;
	height: 55px;
	border-radius: 15px;
	user-select: none;
	border: none;

	${({ $style }) =>
		$style === 'simple' &&
		css`
			background-color: #ccd5ae;
			transition: 0.3s;
			&:hover {
				background-color: #b5c289;
			}

			&:active {
				background-color: #a0b168;
			}
		`}

	${({ $disabled }) =>
		$disabled &&
		css`
			opacity: 0.7;
			cursor: not-allowed;
		`}

	span {
		font-size: 1.3rem;
	}
`
