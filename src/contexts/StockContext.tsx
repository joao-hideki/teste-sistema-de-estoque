import { createContext, ReactNode, useReducer } from 'react';

interface Product {
  id: string;
  name: string;
  imagePath: string;
  description: string;
  price: string;
  dimensions: string;
  weight: string;
  category: string;
}

interface StockContextType {
  products: Product[];
  movimentations: any[];
  createNewProduct: (data: CreateProductData) => void;
}

export const StockContext = createContext({} as StockContextType);

interface StockContextProviderProps {
  children: ReactNode
}

interface StockState {
  products: Product[];
  movimentations: any[]
}

interface CreateProductData {
  name: string;
  imagePath: string;
  description: string;
  price: string;
  dimensions: string;
  weight: string;
  category: string;
}

export function StockContextProvider({children}: StockContextProviderProps) {
  const [stockState, dispatch] = useReducer((state: StockState, action: any) => {
    switch (action.type) {
    case 'ADD_NEW_PRODUCT':
      console.log(state.products, 'jaisdjiasdisas');

      console.log(action.newProduct);

      return {
        ...state,
        products: [...state.products, action.newProduct]
      };
    default:
      return state;
    }
  }, {
    products: [{
      id: '00312312093',
      name: 'Iphone  X',
      description: 'O Apple iPhone X é um smartphone iOS avançado e abrangente em todos os pontos de vista com algumas características excelentes.',
      imagePath: 'https://t2.tudocdn.net/287931?w=152&h=304',
      price: '800',
      dimensions: '143.6 x 70.9 x 7.7 mm',
      weight: '43',
      category: 'Celular'
    }],
    movimentations: []
  });

  const {products, movimentations} = stockState;

  function createNewProduct({
    name, category, description, dimensions, imagePath, price, weight
  }: CreateProductData) {
    const newProduct: Product = {
      id: 'hash',
      name,
      description,
      imagePath,
      price,
      dimensions,
      weight,
      category
    };

    dispatch({
      type: 'ADD_NEW_PRODUCT',
      newProduct
    });
  }

  return(
    <StockContext.Provider value={{
      products,
      movimentations,
      createNewProduct
    }}>
      {children}
    </StockContext.Provider>
  );
}