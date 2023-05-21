import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const BioPage = lazy(() => import("../pages/BioPage/BioPage"));
const ErrorPage = lazy(() => import("../pages/ErrorPage/ErrorPage"));
const MainPage = lazy(() => import("../pages/MainPage/MainPage"));
const Layout = lazy(() => import("../components/Layout/Layout"));

export const Pages = () => (
	<div>
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<MainPage />} />
					<Route
						path="/character/:characterId"
						element={<BioPage />}
					/>
				</Route>
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Suspense>
	</div>
);
