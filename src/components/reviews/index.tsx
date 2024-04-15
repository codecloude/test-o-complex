import React from 'react'
import { DivReviewsBoxSC, SectionReviewsSC } from './styles.reviews'
import Review from './review_item'
import { IReview } from '@/types'
import { getReviews } from '@/api'

const Reviews = async () => {
	const reviews = await getReviews()
	
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
