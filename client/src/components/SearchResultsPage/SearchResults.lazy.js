import { lazy, Suspense } from 'react';

const LazySearchResultsPage = lazy(() => import('./SearchResultsPage'));

const SearchResultsPage = props => (
	<Suspense fallback={null}>
		<LazySearchResultsPage {...props} />
	</Suspense>
);

export default SearchResultsPage;
