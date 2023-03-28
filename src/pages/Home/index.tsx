export function Home() {
  return(
    <div>
      <button>Cadastrar novo produto</button>
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
          <tr>
            <td>
              <img src="https://t2.tudocdn.net/287931?w=152&h=304" alt="" width={50} height={60}/>
            </td>
            <td>00312312093</td>
            <td>Iphone  X</td>
            <td>O Apple iPhone X é um smartphone iOS avançado e abrangente em todos os pontos de vista com algumas características excelentes.</td>
            <td>RS 800,00</td>
            <td>143.6 x 70.9 x 7.7 mm</td>
            <td>{174 / 1000} kg</td>
            <td>Celular</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}