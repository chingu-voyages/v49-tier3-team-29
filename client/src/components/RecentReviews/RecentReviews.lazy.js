import React, { lazy, Suspense } from 'react';

const LazyRecentReviews = lazy(() => import('./RecentReviews'));

const RecentReviews = props => (
  <Suspense fallback={null}>
    <LazyRecentReviews {...props} />
  </Suspense>
);

export default RecentReviews;
