import { useContext } from 'react';
import { StockContext } from '../../contexts/StockContext';

export function Home() {
  const {movimentations, products} = useContext(StockContext);

  return (
    <div>
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

            console.log(movimentationsByProduct);


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
                <td>{product.price}</td>
                <td>{Number(product.price) * productQuantityInStock}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
