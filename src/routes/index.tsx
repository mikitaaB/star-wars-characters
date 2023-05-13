import { Route, Routes } from "react-router-dom";

import { BioPage } from "../pages/BioPage/BioPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { MainPage } from "../pages/MainPage/MainPage";
import { Layout } from "../components/Layout/Layout";

export const Pages = () => (
	<div>
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<MainPage />} />
				<Route path="/character/:characterId" element={<BioPage />} />
			</Route>
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	</div>
);
