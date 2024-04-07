import {combineSlices} from '@reduxjs/toolkit'
import { addToCartSlice } from './AddToCartSlice'

export const Combiner = combineSlices(addToCartSlice)