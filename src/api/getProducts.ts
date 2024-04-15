import { IPageOfProducts } from "@/types"

export const getProducts = async (page: number): Promise<IPageOfProducts> => {
	const response = await fetch(
		`http://o-complex.com:1337/products?page=${page}&page_size=20`
	)
	const products = response.json()
	// console.log('hello from getProducts');

	return products
}