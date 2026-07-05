import React from 'react';
import PropTypes from 'prop-types';

const TransactionTable = ({ transactions, calculatePoints }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Transaction ID</th>
          <th>Customer Name</th>
          <th>Purchase Date</th>
          <th>Product Purchased</th>
          <th>Price</th>
          <th>Reward Points</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((t) => (
          <tr key={t.id}>
            <td>{t.id}</td>
            <td>{t.customerName}</td>
            <td>{new Date(t.date).toLocaleDateString()}</td>
            <td>{t.product}</td>
            <td>${t.price.toFixed(2)}</td>
            <td>{calculatePoints(t.price)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionTable.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    customerName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  calculatePoints: PropTypes.func.isRequired,
};

export default TransactionTable;