import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { Pages } from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<HashRouter>
				<Pages />
			</HashRouter>
		</Provider>
	</React.StrictMode>
);
