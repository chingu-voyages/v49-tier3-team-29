import React, { lazy, Suspense } from 'react';

const LazyMyBooks = lazy(() => import('./MyBooks'));

const MyBooks = props => (
  <Suspense fallback={null}>
    <LazyMyBooks {...props} />
  </Suspense>
);

export default MyBooks;
