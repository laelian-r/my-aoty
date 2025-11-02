import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Folder from "./pages/Folder";

import { Authentification } from "./hooks/useAuth";

export default function App() {
	return (
		<Authentification>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/home/:homeId" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/folder/:folderId" element={<Folder />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</Authentification>
	);
}
