import React, { lazy, Suspense } from 'react';

const LazyBookPage = lazy(() => import('./BookPage'));

const BookPage = props => (
  <Suspense fallback={null}>
    <LazyBookPage {...props} />
  </Suspense>
);

export default BookPage;
