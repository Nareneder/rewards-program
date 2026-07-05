import React, { useState, useEffect, useMemo } from 'react';
import { fetchRewards } from './api/index';
import { aggregateMonthlyRewards, aggregateTotalRewards, calculatePoints } from './utils/rewards';
import TransactionTable from './components/TransactionTable';
import MonthlyRewards from './components/MonthlyRewards';
import TotalRewards from './components/TotalRewards';
import Loading from './components/Loading';
import ErrorBoundary from './components/ErrorBoundary';
import logger from './utils/logger';
import './App.css';

const App = () => {
  const [dataState, setDataState] = useState({
    transactions: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchRewards();
        setDataState({ transactions: result, loading: false, error: null });
      } catch (err) {
        logger.error(err.message);
        setDataState({ transactions: [], loading: false, error: err.message });
      }
    };
    loadData();
  }, []);

  const sortedTransactions = useMemo(() => {
    return [...dataState.transactions].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [dataState.transactions]);

  const monthlyData = useMemo(() => Object.values(aggregateMonthlyRewards(sortedTransactions)), [sortedTransactions]);
  const totalData = useMemo(() => Object.values(aggregateTotalRewards(sortedTransactions)), [sortedTransactions]);

  if (dataState.loading) return <Loading />;
  
  if (dataState.error) return <div className="error-box">Error: {dataState.error}</div>;

  return (
    <div className="app-container">
      <ErrorBoundary>
        <h1>Rewards Program</h1>
        
        <TransactionTable transactions={sortedTransactions} calculatePoints={calculatePoints}/>
        
        <MonthlyRewards data={monthlyData} />
        
        <TotalRewards data={totalData} />
      </ErrorBoundary>
    </div>
  );
};

export default App;
