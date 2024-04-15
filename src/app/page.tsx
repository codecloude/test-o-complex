
import Reviews from '@/components/reviews'
import { SectionHomeSC } from './styles.home'
import { getProducts, getReviews } from '@/api'
import Products from '@/components/products'

export default async function Home() {
	const productsPromise = getProducts()
	const reviewsPromise = getReviews()

	const [products, reviews] = await Promise.all([productsPromise, reviewsPromise])

	// console.log(products);
	// console.log(reviews);

	return (
		<>
			<SectionHomeSC>
				<Reviews reviews={reviews}/>
				<Products sliceProducts={products}/>
			</SectionHomeSC>
		</>
	)
}
