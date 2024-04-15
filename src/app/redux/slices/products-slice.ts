import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/app/redux/store'
import { IPageOfProducts } from '@/types'

interface InitialState extends IPageOfProducts {}

const initialState: InitialState = {
	page: 0,
	products: [],
	total: 0,
	amount: 0,
}

export const product = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setPageOfProducts: (state, action: PayloadAction<IPageOfProducts>) => {
			// Обновляем текущее состояние, добавляя новые продукты
			state.page = action.payload.page
			state.products = [...state.products, ...action.payload.products]
			state.total = action.payload.total
			state.amount = action.payload.amount
		},
	},
})

export const { setPageOfProducts } = product.actions

// Исправленный selector, использующий имя слайса
export const selectProducts = (state: RootState) => state.productReducer

export default product.reducer
