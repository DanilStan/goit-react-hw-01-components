import styled from '@emotion/styled';

export const TableContainer = styled.section`
  display: flex;
  justify-content: center;
`;

export const Table = styled.table`
  width: 1200px;
  margin: 40px;
  text-align: center;
  box-shadow: 1px -2px 25px 2px rgba(14, 11, 11, 0.56);
`;

export const TableHead = styled.thead`
  background-color: #34dbeb;
  color: #ffffff;
  text-transform: uppercase;
`;

export const TableBody = styled.tbody`
  background-color: #ffffff;
  color: #757575;
  text-transform: capitalize;
`;

export const TableRow = styled.tr`
  :nth-of-type(odd) {
    background-color: #757575;
    color: #ffffff;
  }
  &:hover {
    background-color: #34dbeb;
  }
`;

export const TableElement = styled.td`
  padding: 10px;
`;
