import React, { ErrorInfo, lazy, Suspense } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.types';

const ErrorPage = lazy(() => import('@/pages/ErrorPage/ui/ErrorPage/ErrorPage'));

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null, errorInfo: null, hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
      hasError: true,
    });
  }

  render() {
    const { error, errorInfo, hasError } = this.state;
    const { children } = this.props;

    if (hasError && error && errorInfo) {
      const errorMessage = error.message.toString();
      const errorName = error.name.toString();
      const errorInfoText = errorInfo.componentStack.toString();

      return (
        <Suspense fallback=''>
          <ErrorPage errorInfo={errorInfoText} errorName={errorName} errorMessage={errorMessage} />
        </Suspense>
      );
    }

    return children;
  }
}
