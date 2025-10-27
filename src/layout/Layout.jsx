import "../styles/Layout.css";

import Header from "../components/Header";

export default function App({ children }) {
	return (
		<>
			<Header />

			<main>{children}</main>
		</>
	);
}
