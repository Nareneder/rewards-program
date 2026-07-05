export const calculatePoints = (price) => {
  if (!price || isNaN(price) || price < 0) return 0;
  
  const amount = Math.floor(price);
  let points = 0;

  if (amount > 100) {
    points += (amount - 100) * 2;
  }
  if (amount > 50) {
    points += Math.min(amount, 100) - 50;
  }

  return points;
};

export const aggregateMonthlyRewards = (transactions) => {
  return transactions.reduce((acc, transaction) => {
    const date = new Date(transaction.date);
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const key = `${transaction.customerId}-${month}-${year}`;

    if (!acc[key]) {
      acc[key] = {
        customerId: transaction.customerId,
        name: transaction.customerName,
        month,
        year,
        points: 0,
      };
    }
    acc[key].points += calculatePoints(transaction.price);
    return acc;
  }, {});
};

export const aggregateTotalRewards = (transactions) => {
  return transactions.reduce((acc, transaction) => {
    const key = transaction.customerId;
    if (!acc[key]) {
      acc[key] = {
        name: transaction.customerName,
        points: 0,
      };
    }
    acc[key].points += calculatePoints(transaction.price);
    return acc;
  }, {});
};