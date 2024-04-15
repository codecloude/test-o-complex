'use client'

import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    html {
        padding: 0;
        margin: 0;
    }

    body {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        display: grid;
        grid-template-rows: 80px auto;
        justify-items: center;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
`

export const MainSC = styled.main`
	width: 100%;
	height: 100%;
	min-height: calc(100vh - 80px);
`

export const DivContainerSC = styled.div`
	width: 100%;
	height: 100%;
	/* border: 1px solid pink; */
	max-width: 1440px;
	padding: 20px 20px;
	margin: 0 auto;
`
