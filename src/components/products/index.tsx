import React, { useEffect, useRef, useState } from 'react'
import { DivProductsBoxSC, SectionProductsSC } from './styles.products'
import Product from './product_item'
import { getProducts } from '@/api'


const Products = async () => {
	const pageOfProducts = await getProducts(1)
	
	return (
		<>
			<SectionProductsSC>
				<h1>Товары:</h1>
				{pageOfProducts.products.length > 0 && (
					<DivProductsBoxSC>
						{pageOfProducts.products.map((product, index) => (
							<Product product={product} key={`${product.id}-${index}`} />
						))}
					</DivProductsBoxSC>
				)}
			</SectionProductsSC>
		</>
	)
}

export default Products
