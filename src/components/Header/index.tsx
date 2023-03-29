import { NavLink } from 'react-router-dom';
import { HeaderContainer, HeaderContent } from './styles';

export function Header() {
  return(
    <HeaderContainer>
      <HeaderContent>
        <h1>IStock</h1>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Produtos</NavLink>
          <NavLink to="/entrys">Entradas</NavLink>
          <NavLink to="/outputs">Saídas</NavLink>
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
}