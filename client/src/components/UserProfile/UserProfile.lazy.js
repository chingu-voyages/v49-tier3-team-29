import React, { lazy, Suspense } from 'react';

const LazyUserProfile = lazy(() => import('./UserProfile'));

const UserProfile = props => (
  <Suspense fallback={null}>
    <LazyUserProfile {...props} />
  </Suspense>
);

export default UserProfile;
