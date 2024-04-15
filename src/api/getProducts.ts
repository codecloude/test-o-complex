import { IPageOfProducts } from "@/types"

export const getProducts = async (): Promise<IPageOfProducts> => {
	const response = await fetch(
		'http://o-complex.com:1337/products?page=1&page_size=20'
	)
	const products = response.json()
	// console.log('hello from getProducts');

	return products
}