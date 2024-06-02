import { lazy, Suspense } from 'react';

const LazyTableComponent = lazy(() => import('./TableComponent'));

const TableComponent = props => (
	<Suspense fallback={null}>
		<LazyTableComponent {...props} />
	</Suspense>
);

export default TableComponent;
