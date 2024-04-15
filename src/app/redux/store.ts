import { configureStore } from '@reduxjs/toolkit';
import {
	TypedUseSelectorHook,
	useSelector,
} from 'react-redux';
import productReducer from './slices/products-slice';

export const store = configureStore({
	reducer: {
		productReducer
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

