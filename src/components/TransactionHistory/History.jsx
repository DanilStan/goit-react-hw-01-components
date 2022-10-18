import PropTypes from 'prop-types';
import { TableRow, TableElement } from './TransactionHistory.styled';

export const History = ({ type, amount, currency }) => {
  return (
    <TableRow>
      <TableElement>{type}</TableElement>
      <TableElement>{amount}</TableElement>
      <TableElement>{currency}</TableElement>
    </TableRow>
  );
};

History.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
