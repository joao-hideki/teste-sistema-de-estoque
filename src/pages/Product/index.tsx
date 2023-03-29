import { useContext, useState } from 'react';
import { Modal } from '../../components/Modal';
import { StockContext } from '../../contexts/StockContext';

export function Product() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [productName, setProductName] = useState<string>('');
  const [productImagePath, setProductImagePath] = useState<string>('');
  const [productDescription, setProductDescription] = useState<string>('');
  const [productPrice, setProductPrice] = useState<string>('');
  const [productDimension, setProductDimension] = useState<string>('');
  const [productWeight, setProductWeight] = useState<string>('');
  const [productCategory, setProductCategory] = useState<string>('');

  const {products, createNewProduct} = useContext(StockContext);


  function openModal() {
    setIsOpenModal(true);
  }

  function closeModal() {
    setIsOpenModal(false);
  }

  function addNewProduct() {
    createNewProduct({
      name: productName,
      imagePath: productImagePath,
      category: productCategory,
      price: productPrice,
      description: productDescription,
      dimensions: productDimension,
      weight: productWeight,
    });
  }

  return(
    <div>
      <Modal
        isOpen={isOpenModal}
        onClose={closeModal}
      >
        <div>
          <input
            type="text"
            placeholder='Nome do produto'
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <input
            type="text"
            placeholder='Link da imagem do produto'
            value={productImagePath}
            onChange={(e) => setProductImagePath(e.target.value)}
          />
          <input
            type="text"
            placeholder='Descrição'
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder='Preço'
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder='Dimensão'
            value={productDimension}
            onChange={(e) => setProductDimension(e.target.value)}
          />
          <input
            type="text"
            placeholder='Peso'
            value={productWeight}
            onChange={(e) => setProductWeight(e.target.value)}
          />
          <input
            type="text"
            placeholder='Categoria'
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
          />
          <br/>
          <button onClick={addNewProduct}>Criar Novo Produto</button>
        </div>
      </Modal>

      <button onClick={openModal}>Cadastrar novo produto</button>
      <table>
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Código de Barra</th>
            <th>Produto</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Medida</th>
            <th>Peso (kg)</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img
                  src={product.imagePath} alt="" width={50} height={60}
                />
              </td>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price} reais</td>
              <td>{product.dimensions}</td>
              <td>{product.weight}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}