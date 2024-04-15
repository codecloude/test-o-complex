'use client'

import React from 'react'
import { DivReviewBoxSC } from './styles.review'
import { IReview } from '@/types'
import sanitizeHtml from 'sanitize-html';

interface Props {
	review: IReview
}

const Review = (props: Props) => {
	const { review } = props
	const cleanText = sanitizeHtml(review.text)

	return (
		<>
			<DivReviewBoxSC dangerouslySetInnerHTML={{ __html: cleanText }}/>
			{/* <DivReviewBoxSC>kek</DivReviewBoxSC> */}
		</>
	)
}

export default Review
