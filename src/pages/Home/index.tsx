import { useContext } from 'react';
import { StockContext } from '../../contexts/StockContext';
import { priceFormatter } from '../../utils/formatter';
import { HomeContainer } from './styles';

export function Home() {
  const {movimentations, products} = useContext(StockContext);

  return (
    <HomeContainer>
      <table>
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Código</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Valor em estoque</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            const movimentationsByProduct = movimentations.filter((movimentation) =>
              movimentation.product.id === product.id
            );

            if (!movimentationsByProduct) return null;

            const productQuantityInStock = movimentationsByProduct.reduce(
              (accumulator, currentValue) => {
                if (currentValue.type === 'entry') {
                  accumulator += currentValue.quantity;
                } else {
                  accumulator -= currentValue.quantity;
                }

                return accumulator;
              }, 0);

            return(
              <tr key={product.id}>
                <td>
                  <img
                    src={product.imagePath} alt="" width={50} height={60}
                  />
                </td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{productQuantityInStock}</td>
                <td>{priceFormatter.format(Number(product.price))}</td>
                <td>{priceFormatter.format(Number(product.price) * productQuantityInStock)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </HomeContainer>
  );
}
