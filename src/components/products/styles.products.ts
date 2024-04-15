'use client'

import styled from 'styled-components'

export const SectionProductsSC = styled.section`
	width: 100%;
	height: fit-content;
	display: grid;
	grid-template-rows: max-content;
	gap: 20px;
	justify-items: center;

	h1 {
		font-size: 25px;
	}
`

export const DivProductsBoxSC = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(301px, 301px));
    width: 100%;
	grid-gap: 30px;
	justify-items: center;
    justify-content: center;
    grid-auto-flow: row;
`
