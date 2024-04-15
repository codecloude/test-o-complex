export interface IPageOfProducts {
    page: number
    amount: number
    total: number
    products: IProduct[]
}

export interface IProduct {
    id: number
    image_url: string
    title: string
    description: string
    price: number
}