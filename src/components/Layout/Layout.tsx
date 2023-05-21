import Container from "@mui/material/Container/Container";
import Box from "@mui/material/Box/Box";
import { Outlet } from "react-router-dom";

const Layout = () => (
	<Container maxWidth="md">
		<Box sx={{ my: 4 }}>
			<header>
				<h1 style={{ textAlign: "center" }}>Star wars characters</h1>
			</header>
			<Outlet />
		</Box>
	</Container>
);

export default Layout;
