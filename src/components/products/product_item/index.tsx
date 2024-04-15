'use client'

import React, { useState } from 'react'
import {
	DivButtonsBoxSC,
	DivIconBoxSC,
	DivProductBoxSC,
	DivQuantityBoxSC,
	ImageProductSC,
} from './styles.product'
import { IProduct } from '@/types'
import Button from '@/components/button'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'

interface Props {
	product: IProduct
}

const Product = (props: Props) => {
	const { product } = props
	const { id, image_url, title, description, price } = product

	const [quantity, setQuantity] = useState<number>(0)

	const handleAddQuantity = () => {
		setQuantity((prev) => prev + 1)
	}

	const handleRemoveQuantity = () => {
		setQuantity((prev) => prev - 1)
	}

	// console.log(quantity)

	return (
		<>
			<DivProductBoxSC>
				<ImageProductSC
					src={image_url}
					alt={title}
					width={301}
					height={366}
					loading={'lazy'}
				/>
				<h1>{title}</h1>
				<p>{description}</p>
				<h1>Цена: {price}</h1>
				{quantity <= 0 ? (
					<Button style={'simple'} onClick={handleAddQuantity}>
						<span>Купить</span>
					</Button>
				) : (
					<DivButtonsBoxSC>
						<Button onClick={handleAddQuantity}>
							<DivIconBoxSC>
								<IoMdAdd size={25} />
							</DivIconBoxSC>
						</Button>
						<DivQuantityBoxSC>
							<span>{quantity}</span>
						</DivQuantityBoxSC>
						<Button onClick={handleRemoveQuantity}>
							<DivIconBoxSC>
								<IoMdRemove size={25} />
							</DivIconBoxSC>
						</Button>
					</DivButtonsBoxSC>
				)}
			</DivProductBoxSC>
		</>
	)
}

export default Product
