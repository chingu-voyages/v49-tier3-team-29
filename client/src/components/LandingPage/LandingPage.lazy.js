import React, { lazy, Suspense } from 'react';

const LazyLandingPage = lazy(() => import('./LandingPage'));

const LandingPage = props => (
  <Suspense fallback={null}>
    <LazyLandingPage {...props} />
  </Suspense>
);

export default LandingPage;
