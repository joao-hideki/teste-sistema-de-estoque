import styled from 'styled-components';

export const HomeContainer = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;
  padding: 1rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    color: #E1E1E6;

    th {
      padding: 1rem;
      text-align: left;
      font-size: 0.875rem;
      line-height: 1.6;
      background-color: #323238;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: #29292E;
      border-top: 4px solid #202024;
      padding: 1rem;
      font-size: 1rem;
      line-height: 1.6;

      &:first-child {
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;
