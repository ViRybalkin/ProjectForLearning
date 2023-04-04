// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import {useDispatch} from 'react-redux'
import type {AppDispatch} from './AppStore.types'

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch