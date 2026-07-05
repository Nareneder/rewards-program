const rewardsData = [
  { id: 1, customerId: 101, customerName: 'John Doe', date: '2023-12-15', product: 'Monitor', price: 120.50 },
  { id: 2, customerId: 101, customerName: 'John Doe', date: '2024-01-10', product: 'Mouse', price: 60.00 },
  { id: 3, customerId: 101, customerName: 'John Doe', date: '2024-02-05', product: 'Keyboard', price: 150.00 },
  { id: 4, customerId: 102, customerName: 'Jane Smith', date: '2023-12-20', product: 'Desk Lamp', price: 40.00 },
  { id: 5, customerId: 102, customerName: 'Jane Smith', date: '2024-01-15', product: 'Chair', price: 200.00 },
  { id: 6, customerId: 102, customerName: 'Jane Smith', date: '2024-02-20', product: 'Headset', price: 90.00 },
  { id: 7, customerId: 101, customerName: 'John Doe', date: '2024-02-25', product: 'Cables', price: 10.00 },
];

export const fetchRewards = () => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 1000) + 500;
    setTimeout(() => {
      if (Math.random() < 0.05) {
        reject(new Error("server error."));
      } else {
        resolve(rewardsData);
      }
    }, delay);
  });
};