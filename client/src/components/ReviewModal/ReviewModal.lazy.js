import React, { lazy, Suspense } from 'react';

const LazyReviewModal = lazy(() => import('./ReviewModal'));

const ReviewModal = props => (
  <Suspense fallback={null}>
    <LazyReviewModal {...props} />
  </Suspense>
);

export default ReviewModal;
