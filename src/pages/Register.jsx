import "../styles/Auth.css";

import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

import Buttons from "../components/Buttons";

export default function Register() {
	const { user, signUpUser } = useAuth();
	const navigate = useNavigate();
	const [error, setError] = useState("");

	function registerUser(e) {
		e.preventDefault();
		setError("");

		const formData = new FormData(e.currentTarget);
		const username = formData.get("username")?.toString().trim();
		const email = formData.get("email")?.toString().trim();
		const password = formData.get("password")?.toString().trim();

		try {
			const newUser = signUpUser(username, email, password);
			navigate(`/home/${newUser.id}`, { replace: true });
		} catch (err) {
			setError(err.message);
		}
	}

	if (user) {
		return <Navigate to={`/home/${user.id}`} replace />;
	}

	return (
		<>
			<div className="auth-container">
				<form onSubmit={registerUser}>
					<h2>Inscription</h2>

					{error && <div className="error-message">{error}</div>}

					<div className="block-input">
						<label htmlFor="username">Pseudo :</label>
						<Buttons
							type="text"
							id="username"
							name="username"
							placeholder="Ecrire ici"
							required
						/>
					</div>

					<div className="block-input">
						<label htmlFor="email">Email :</label>
						<Buttons
							type="email"
							id="email"
							name="email"
							placeholder="Ecrire ici"
							required
						/>
					</div>

					<div className="block-input">
						<label htmlFor="password">Mot de passe :</label>
						<Buttons
							type="password"
							id="password"
							name="password"
							placeholder="Ecrire ici"
							required
						/>
					</div>

					<Buttons type="submit" id="submit" value="S'inscrire" />
				</form>
			</div>
		</>
	);
}
