import React, { lazy, Suspense } from 'react';

const LazyCompletedPage = lazy(() => import('./CompletedPage'));

const CompletedPage = props => (
  <Suspense fallback={null}>
    <LazyCompletedPage {...props} />
  </Suspense>
);

export default CompletedPage;
