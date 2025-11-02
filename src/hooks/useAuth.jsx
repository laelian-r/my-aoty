import { createContext, useContext, useState } from "react";

import { getUserByEmail } from "../utils/authentification";

const AuthentificationContext = createContext();

export function Authentification({ children }) {
	const [user, setUser] = useState(null);
	const [isUserLogin, setIsUserLogin] = useState(false);

	function signInUser(email, password) {
		const user = getUserByEmail(email);

		if (!user || user.password !== password)
			throw new Error("Wrong credentials");

		setUser(user);
		setIsUserLogin(true);

		return user;
	}

	return (
		<>
			<AuthentificationContext.Provider
				value={{ isUserLogin, user, signInUser }}
			>
				{children}
			</AuthentificationContext.Provider>
		</>
	);
}

export function useAuth() {
	const context = useContext(AuthentificationContext);

	if (context === undefined)
		throw new Error("Missing context <Authentification>");

	return context;
}
