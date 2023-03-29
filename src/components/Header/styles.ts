import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 5rem;
  border-bottom: 1px solid gray;
`;
export const HeaderContent = styled.div`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
      font-size: 1.25rem;
      text-decoration: none;
      transition: color 0.2s;
      position: relative;
      padding: 0 0.5rem;
      height: 5rem;
      line-height: 5rem;

      &:hover {
        color: green;
      }

      &.active {
        border-bottom: 2px solid red;
        margin-bottom: 1px;
        color: red;
      }
    }
  }
`;