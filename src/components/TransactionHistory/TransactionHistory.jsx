import PropTypes from 'prop-types';
import { History } from './History';
// import Transaction from './Transaction';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </TableHead>

        <TableBody>
          {items.map(item => (
            <History
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
