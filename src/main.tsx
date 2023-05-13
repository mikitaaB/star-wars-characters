import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { BioPage } from "./pages/BioPage/BioPage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { Layout } from "./components/Layout/Layout";
import { store } from "./state/store";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <MainPage />,
			},
			{
				path: "character/:characterId",
				element: <BioPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
