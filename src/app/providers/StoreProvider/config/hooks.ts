import {useDispatch} from 'react-redux'
import type {AppDispatch} from './AppStore.types'

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch