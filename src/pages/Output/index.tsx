import { useContext, useState } from 'react';
import { StockContext } from '../../contexts/StockContext';
import { priceFormatter } from '../../utils/formatter';
import { OutputContainer } from './styles';

export function Output() {
  const [selectedProductId, setSelectedProductId] = useState<string>('');
  const [productQuantity, setProductQuantity] = useState<string>('');

  const {movimentations, products, createNewMovimentation} = useContext(StockContext);

  function registerNewOutputMovimentation() {
    createNewMovimentation({
      productId: selectedProductId,
      quantity: productQuantity,
      type: 'output'
    });
  }

  return (
    <OutputContainer>
      <div>
        <select onChange={(e) => setSelectedProductId(e.target.value)}>
          <option>Selecione o produto</option>
          {products.map((product) => (
            <option value={product.id} key={product.id}>
              {product.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder='Indique a quantidade'
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
        />
        <button onClick={registerNewOutputMovimentation}>Registrar</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Imagem</th>
            <th>Produto</th>
            <th>Valor unitário</th>
            <th>Quantidade</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {movimentations
            .filter((movimentations) => movimentations.type === 'output')
            .map((movimentation) => (
              <tr key={movimentation.id}>
                <td>{new Intl.DateTimeFormat('pt-BR').format(movimentation.createdAt)}</td>
                <td>
                  <img
                    src={movimentation.product.imagePath} alt="" width={50} height={60}
                  />
                </td>
                <td>{movimentation.product.name}</td>
                <td>{priceFormatter.format(Number(movimentation.product.price))}</td>
                <td>{movimentation.quantity}</td>
                <td>{priceFormatter.format(Number(movimentation.product.price) * movimentation.quantity)}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </OutputContainer>
  );
}