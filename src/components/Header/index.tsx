import { HeaderContainer, HeaderContent } from './styles';

export function Header() {
  return(
    <HeaderContainer>
      <HeaderContent>
        <h1>IStock</h1>
        <div>
          <a href="">Home</a>
          <a href="">Produtos</a>
          <a href="">Entradas</a>
          <a href="">Saídas</a>
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
}