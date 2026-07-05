import React from 'react';
import PropTypes from 'prop-types';

const MonthlyRewards = ({ data }) => (
  <div className="table-container">
    <h3>User Monthly Rewards</h3>
    <table>
      <thead>
        <tr>
          <th>Customer ID</th>
          <th>Name</th>
          <th>Month</th>
          <th>Year</th>
          <th>Reward Points</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            <td>{row.customerId}</td>
            <td>{row.name}</td>
            <td>{row.month}</td>
            <td>{row.year}</td>
            <td>{row.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

MonthlyRewards.propTypes = {
  data: PropTypes.array.isRequired
};

export default MonthlyRewards;