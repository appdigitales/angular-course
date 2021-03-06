import {Action, createReducer, on} from '@ngrx/store';
import {AddProduct, CloseSidenav, DeleteProduct, OpenSidenav} from './home.actions';

export interface HomeState {
  items: any;
  totalAmount: number;
  sidenavOpen: boolean;
}

export const initialState: HomeState = {
  items: [],
  totalAmount: 0,
  sidenavOpen: false
};

const featureReducer = createReducer(
  initialState,
  on(OpenSidenav, (state) => ({...state, sidenavOpen: true})),
  on(CloseSidenav, (state) => ({...state, sidenavOpen: false})),
  on(AddProduct, (state, {product}) => ({...state, items: state.items.concat([product])})),
  on(DeleteProduct, (state, {product}) => ({...state, items: state.items.filter(p => p.id !== product.id)}))
);

export function reducer(state: HomeState, action: Action): any {
  return featureReducer(state, action);
}
