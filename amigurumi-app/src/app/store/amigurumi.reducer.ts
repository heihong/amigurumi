import { createReducer, on } from "@ngrx/store"
import * as fromAction from './amigrurumi.actions'


export const initialState = 0

export const countRedecucer= createReducer(
    initialState,
    on(fromAction.increment, state => (state++)),
    on(fromAction.decrement, state => (state-- )),
    on(fromAction.reset, state => 0),
)