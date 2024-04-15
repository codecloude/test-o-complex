import Reviews from '@/components/reviews'
import { SectionHomeSC } from './styles.home'
import Products from '@/components/products'
import { getProducts } from '@/api'

export default function Home() {
	
	return (
		<>
			<SectionHomeSC>
				<Reviews />
				<Products />
			</SectionHomeSC>
		</>
	)
}
