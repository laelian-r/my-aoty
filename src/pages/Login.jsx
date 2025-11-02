import "../styles/Auth.css";

import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import Buttons from "../components/Buttons";

export default function Login() {
	const { user, signInUser } = useAuth();
	const navigate = useNavigate();

	function signUser(e) {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const email = formData.get("email")?.toString().trim();
		const password = formData.get("password")?.toString().trim();

		const signedUser = signInUser(email, password);
		navigate(`/home/${signedUser.id}`, { replace: true });
	}

	if (user) {
		return <Navigate to={`/home/${user.id}`} replace />;
	} else {
		return (
			<>
				<div className="auth-container">
					<form onSubmit={signUser}>
						<h2>Connexion</h2>

						<div className="block-input">
							<label htmlFor="email">Email :</label>
							<Buttons
								type="email"
								id="email"
								name="email"
								placeholder="Ecrire ici"
							/>
						</div>

						<div className="block-input">
							<label htmlFor="password">Mot de passe :</label>
							<Buttons
								type="password"
								id="password"
								name="password"
								placeholder="Ecrire ici"
							/>
						</div>

						<Buttons type="submit" id="submit" value="Se connecter" />
					</form>
				</div>
			</>
		);
	}
}
