import React, { ErrorInfo, lazy, Suspense } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.types';

const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render() {
    const { hasError, error, errorInfo } = this.state;
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
