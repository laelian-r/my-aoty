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

	function signUpUser(username, email, password) {
		// Validation des champs
		if (!username || !email || !password) {
			throw new Error("Tous les champs sont obligatoires");
		}

		if (password.length < 6) {
			throw new Error("Le mot de passe doit contenir au moins 6 caractères");
		}

		// Créer l'utilisateur
		const newUser = createUser(username, email, password);

		// Connecter automatiquement l'utilisateur après l'inscription
		setUser(newUser);
		setIsUserLogin(true);

		return newUser;
	}

	return (
		<>
			<AuthentificationContext.Provider
				value={{ isUserLogin, user, signInUser, signUpUser }}
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
