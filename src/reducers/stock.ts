import { Movimentation, Product } from '../contexts/StockContext';

export interface StockState {
  products: Product[];
  movimentations: Movimentation[];
}

export function stockReducer(state: StockState, action: any): StockState {
  switch (action.type) {
  case 'ADD_NEW_PRODUCT':
    return {
      ...state,
      products: [...state.products, action.newProduct]
    };
  case 'ADD_NEW_MOVIMENTATION':
    return {
      ...state,
      movimentations: [...state.movimentations, action.newMovimentation]
    };
  default:
    return state;
  }
}