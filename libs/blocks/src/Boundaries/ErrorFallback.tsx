import { useCallback } from 'react';
import { FallbackProps } from 'react-error-boundary';

const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: FallbackProps): JSX.Element => {
  // TODO: Convert to util
  const isDev = process.env['NODE_ENV'] === 'development';
  const handleTryAgain = useCallback(() => {
    if (resetErrorBoundary) {
      resetErrorBoundary();
    }
  }, [resetErrorBoundary]);

  return (
    <div role='alert'>
      {isDev && (
        <code>
          <pre>{error?.message}</pre>
        </code>
      )}
      <button onClick={handleTryAgain} type='button'>
        Try again
      </button>
    </div>
  );
};

export default ErrorFallback;
