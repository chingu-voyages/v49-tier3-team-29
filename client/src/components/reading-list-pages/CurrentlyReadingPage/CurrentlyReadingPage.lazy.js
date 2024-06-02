import { lazy, Suspense } from 'react';

const LazyCurrentlyReadingPage = lazy(() => import('./CurrentlyReadingPage'));

const CurrentlyReadingPage = props => (
	<Suspense fallback={null}>
		<LazyCurrentlyReadingPage {...props} />
	</Suspense>
);

export default CurrentlyReadingPage;
