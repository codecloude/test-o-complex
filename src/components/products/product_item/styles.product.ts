'use client'

import Image from 'next/image'
import styled from 'styled-components'

export const DivProductBoxSC = styled.div`
	width: 301px;
	height: 600px;
	background-color: #e9edc9;
	padding: 10px;
	border-radius: 15px;
	display: grid;
	grid-template-rows: max-content max-content auto max-content max-content;
	gap: 10px;
	justify-self: center;

	h1 {
		font-weight: 500;
		text-align: left;
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 1.3rem;
	}

	p {
        /* white-space: nowrap; */
		overflow: hidden;
		text-overflow: ellipsis;
		/* max-height: 100px; // Задайте максимальную высоту, которая позволит показать небольшой объем текста */
		/* line-height: 1.2; // Установите интерлиньяж, чтобы текст выглядел более четким */
	}
`

export const ImageProductSC = styled(Image)`
	width: 100%;
	height: 366px;
	object-fit: cover;
	border-radius: 15px;
`

export const DivButtonsBoxSC = styled.div`
    width: 100%;
    height: max-content;
    display: grid;
    gap: 7px;
    grid-template-columns: max-content auto max-content;
`

export const DivIconBoxSC = styled.div`
    width: 55px;
    display: grid;
    align-items: center;
    justify-items: center;
`

export const DivQuantityBoxSC = styled.div`
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
    border-radius: 15px;
    background-color: #ccd5ae;

    span {
        font-size: 1.3rem;
    }
`