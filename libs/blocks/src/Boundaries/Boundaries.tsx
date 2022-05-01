import { Suspense, SuspenseProps } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import DefaultErrorFallback from './ErrorFallback';
import DefaultSuspenseFallback from './SuspenseFallback';

export type BoundariesProps = {
  /**
   * Can provide an ErrorComponent to show as a fallback.
   */
  ErrorComponent?: React.ComponentType<FallbackProps>;
  /**
   * Can provide an SuspenseComponent to show as a fallback.
   */
  SuspenseComponent?: React.ComponentType<SuspenseProps>;

  children?: React.ReactNode;
};

export const Boundaries = ({
  ErrorComponent = DefaultErrorFallback,
  SuspenseComponent = DefaultSuspenseFallback,
  children,
}: BoundariesProps): JSX.Element => {
  return (
    <Suspense fallback={<SuspenseComponent />}>
      <ErrorBoundary FallbackComponent={ErrorComponent}>
        {children}
      </ErrorBoundary>
    </Suspense>
  );
};
