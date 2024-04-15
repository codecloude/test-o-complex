import { IReview } from "@/types"

export const getReviews = async (): Promise<IReview[]> => {
	const response = await fetch('http://o-complex.com:1337/reviews')
	const reviews = response.json()
	// console.log('hello from getReviews');

	return reviews
}