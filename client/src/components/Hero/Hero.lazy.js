import React, { lazy, Suspense } from 'react';

const LazyHero = lazy(() => import('./Hero'));

const Hero = props => (
  <Suspense fallback={null}>
    <LazyHero {...props} />
  </Suspense>
);

export default Hero;
