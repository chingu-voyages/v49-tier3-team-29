import { lazy, Suspense } from "react";

const LazyLoginPage = lazy(() => import("./ForgotPasswordPage"));

const ForgotPasswordPage = (props) => (
  <Suspense fallback={null}>
    <LazyLoginPage {...props} />
  </Suspense>
);

export default ForgotPasswordPage;
