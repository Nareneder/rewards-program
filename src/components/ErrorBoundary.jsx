import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import logger from '../utils/logger';

const ErrorFallback = ({ error }) => (
  <div className="error-fallback">
    <h2>Something went wrong.</h2>
    <details style={{ whiteSpace: 'pre-wrap', marginTop: '10px', color: 'red' }}>
      {error && error.toString()}
    </details>
  </div>
);

const ErrorBoundary = ({ children }) => {
  const handleError = (error, info) => {
    logger.error(`ErrorBoundary caught an error: ${error.message}`);
    logger.log(info.componentStack);
  };

  return (
    <ReactErrorBoundary 
      FallbackComponent={ErrorFallback} 
      onError={handleError}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
