import {configureStore} from '@reduxjs/toolkit'
import { Combiner } from './CombineSlice'


export const store =configureStore({
    reducer: {
        Combiner
    }
})