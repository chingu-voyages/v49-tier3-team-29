import React, { lazy, Suspense } from 'react';

const LazyFeatures = lazy(() => import('./Features'));

const Features = props => (
  <Suspense fallback={null}>
    <LazyFeatures {...props} />
  </Suspense>
);

export default Features;
