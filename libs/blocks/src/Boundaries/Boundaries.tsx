import { Suspense } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import DefaultErrorFallback from './ErrorFallback';
import DefaultSuspenseFallback from './SuspenseFallback';

// TODO: Convert to util
const isDOM = Boolean(
  typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
);

export interface BoundaryProps {
  /**
   * Can provide an ErrorComponent to show as a fallback.
   */
  ErrorComponent?: React.ComponentType<FallbackProps>;
  /**
   * Can provide an SuspenseComponent to show as a fallback.
   */
  SuspenseComponent?: React.VoidFunctionComponent;

  children?: React.ReactNode;
}

const Boundaries = ({
  ErrorComponent = DefaultErrorFallback,
  SuspenseComponent = DefaultSuspenseFallback,
  children,
}: BoundaryProps) => {
  // Make sure we are not trying any of this on the server in any SSR situations.
  if (isDOM) {
    return (
      <Suspense fallback={<SuspenseComponent />}>
        <ErrorBoundary FallbackComponent={ErrorComponent}>
          {children}
        </ErrorBoundary>
      </Suspense>
    );
  } else {
    return null;
  }
};

export default Boundaries;
