'use client'

import styled from 'styled-components'

export const DivReviewBoxSC = styled.div`
	width: 100%;
    max-width: 468px;
    min-width: 382px;
    height: max-content;
    background-color: #FAEDCD;
    padding: 20px 27px;
    border-radius: 15px;
    display: grid;
    grid-auto-rows: max-content;
    gap: 7px;
    justify-self: center;

    h1 {
        font-size: 26px;
        font-weight: 500;
    }

    p {
        word-spacing: 1px;
        letter-spacing: 0.4px
    }
`