import { createContext, ReactNode, useReducer } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { stockReducer, StockState } from '../reducers/stock';

export interface Product {
  id: number;
  name: string;
  imagePath: string;
  description: string;
  price: string;
  dimensions: string;
  weight: string;
  category: string;
}

export interface Movimentation {
  id: string;
  type: 'entry' | 'output'
  product: Product;
  quantity: number;
  createdAt: Date;
}

interface StockContextType {
  products: Product[];
  movimentations: Movimentation[];
  createNewProduct: (data: CreateProductData) => void;
  createNewMovimentation: (data: any) => void;
}

export const StockContext = createContext({} as StockContextType);

interface StockContextProviderProps {
  children: ReactNode
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

// mock
const initialState: StockState = {
  products: [
    {
      id: 32930,
      name: 'Iphone  X',
      description: 'O Apple iPhone X é um smartphone iOS avançado e abrangente em todos os pontos de vista com algumas características excelentes.',
      imagePath: 'https://t2.tudocdn.net/287931?w=152&h=304',
      price: '800',
      dimensions: '143.6 x 70.9 x 7.7 mm',
      weight: '43',
      category: 'Celular',
    },
    {
      id: 428237,
      name: 'Cadeira Uni',
      description: 'Uni, perfeita para mesas de escritório ou home office. Além de estilo, a Uni garante a postura correta que beneficia a circulação sanguínea do corpo.',
      imagePath: 'https://assets.betalabs.net/production/flexform/item-images/99d132c62f29d957dae37e0ad4b9a95e.jpg',
      price: '400',
      dimensions: '1040 x 470 x 760 mm',
      weight: '12',
      category: 'Escritório',
    },
  ],
  movimentations: [
    {
      id: uuidV4(),
      type: 'entry',
      product: {
        id: 32930,
        name: 'Iphone  X',
        description: 'O Apple iPhone X é um smartphone iOS avançado e abrangente em todos os pontos de vista com algumas características excelentes.',
        imagePath: 'https://t2.tudocdn.net/287931?w=152&h=304',
        price: '800',
        dimensions: '143.6 x 70.9 x 7.7 mm',
        weight: '43',
        category: 'Celular',
      },
      quantity: 10,
      createdAt: new Date(),
    },
    {
      id: uuidV4(),
      type: 'output',
      product: {
        id: 32930,
        name: 'Iphone  X',
        description: 'O Apple iPhone X é um smartphone iOS avançado e abrangente em todos os pontos de vista com algumas características excelentes.',
        imagePath: 'https://t2.tudocdn.net/287931?w=152&h=304',
        price: '800',
        dimensions: '143.6 x 70.9 x 7.7 mm',
        weight: '43',
        category: 'Celular',
      },
      quantity: 7,
      createdAt: new Date(),
    },
  ],
};

export function StockContextProvider({children}: StockContextProviderProps) {
  const [stockState, dispatch] = useReducer(stockReducer, initialState);

  const {products, movimentations} = stockState;

  function createNewProduct({
    name, category, description, dimensions, imagePath, price, weight
  }: CreateProductData) {
    const newProduct: Product = {
      id: Date.now(),
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

  function createNewMovimentation(data:any) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const product = products.find(item => item.id === Number(data.productId))!;

    const newMovimentation: Movimentation = {
      id: uuidV4(),
      product: product,
      quantity: Number(data.quantity),
      type: data.type,
      createdAt: new Date()
    };

    dispatch({
      type: 'ADD_NEW_MOVIMENTATION',
      newMovimentation
    });
  }

  return(
    <StockContext.Provider value={{
      products,
      movimentations,
      createNewProduct,
      createNewMovimentation
    }}>
      {children}
    </StockContext.Provider>
  );
}