import { lazy, Suspense } from 'react';

const LazyReviewTableComponent = lazy(() => import('./ReviewTableComponent'));

const ReviewTableComponent = props => (
	<Suspense fallback={null}>
		<LazyReviewTableComponent {...props} />
	</Suspense>
);

export default ReviewTableComponent;
