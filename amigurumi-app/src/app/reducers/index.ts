import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { countRedecucer } from '../store/amigurumi.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
    counter: countRedecucer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
