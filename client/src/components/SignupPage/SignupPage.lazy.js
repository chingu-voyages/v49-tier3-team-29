import React, { lazy, Suspense } from 'react';

const LazySignupPage = lazy(() => import('./SignupPage'));

const SignupPage = props => (
  <Suspense fallback={null}>
    <LazySignupPage {...props} />
  </Suspense>
);

export default SignupPage;
