import { lazy, Suspense } from 'react';

const LazyWantToReadPage = lazy(() => import('./WantToReadPage'));

const WantToReadPage = props => (
	<Suspense fallback={null}>
		<LazyWantToReadPage {...props} />
	</Suspense>
);

export default WantToReadPage;
