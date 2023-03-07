import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { translatedReducer } from './slices/translatedSlice'
import { translateReducer } from './slices/translateSlice'

export const store = configureStore({
  reducer: {
    translate: translateReducer,
    language: translatedReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => RootDispatch = useDispatch; 