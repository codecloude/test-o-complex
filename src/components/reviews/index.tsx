import React from 'react'
import { DivReviewsBoxSC, SectionReviewsSC } from './styles.reviews'
import Review from './review_item'
import { IReview } from '@/types'

interface Props {
	reviews: IReview[]
}

const Reviews = (props: Props) => {
	const { reviews } = props
	return (
		<>
			<SectionReviewsSC>
				<h1>Отзывы:</h1>
				<DivReviewsBoxSC>
					{reviews.map((review, index) => (
						<Review review={review} key={`${review.id}-${index}`} />
					))}
				</DivReviewsBoxSC>
			</SectionReviewsSC>
		</>
	)
}

export default Reviews
