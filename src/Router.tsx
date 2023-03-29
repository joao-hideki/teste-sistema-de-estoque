import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Entry } from './pages/Entry';
import { Output } from './pages/Output';
import { Product } from './pages/Product';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path='/products' element={<Product />} />
        <Route path='/entrys' element={<Entry />} />
        <Route path='/outputs' element={<Output />} />
      </Route>
    </Routes>
  );
}