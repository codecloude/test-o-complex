import React from 'react'
import { DivProductsBoxSC, SectionProductsSC } from './styles.products'
import Product from './product_item'
import { IPageOfProducts, IProduct } from '@/types'

interface Props {
	sliceProducts: IPageOfProducts
}

const Products = (props: Props) => {
	const { sliceProducts } = props
	const { products } = sliceProducts
	return (
		<>
			<SectionProductsSC>
				<h1>Товары:</h1>
				<DivProductsBoxSC>
					{products.map((product) => (
						<Product product={product} key={product.id} />
					))}
				</DivProductsBoxSC>
			</SectionProductsSC>
		</>
	)
}

export default Products
