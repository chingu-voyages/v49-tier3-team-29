import React, { lazy, Suspense } from 'react';

const LazyRecentBooks = lazy(() => import('./RecentBooks'));

const RecentBooks = props => (
  <Suspense fallback={null}>
    <LazyRecentBooks {...props} />
  </Suspense>
);

export default RecentBooks;
