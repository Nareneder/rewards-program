import React from 'react';
import PropTypes from 'prop-types';

const TotalRewards = ({ data }) => (
  <div className="table-container">
    <h3>Total Rewards</h3>
    <table>
      <thead>
        <tr>
          <th>Customer Name</th>
          <th>Total Reward Points</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            <td>{row.name}</td>
            <td>{row.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

TotalRewards.propTypes = {
  data: PropTypes.array.isRequired
};

export default TotalRewards;