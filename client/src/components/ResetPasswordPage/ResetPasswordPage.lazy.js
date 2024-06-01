import { lazy, Suspense } from "react";

const LazyLoginPage = lazy(() => import("./ResetPasswordPage"));

const ResetPasswordPage = (props) => (
  <Suspense fallback={null}>
    <LazyLoginPage {...props} />
  </Suspense>
);

export default ResetPasswordPage;
