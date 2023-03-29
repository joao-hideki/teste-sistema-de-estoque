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
  default:
    return state;
  }
}