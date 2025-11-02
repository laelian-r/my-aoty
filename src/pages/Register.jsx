import "../styles/Auth.css";

import Buttons from "../components/Buttons";

export default function Register() {
	return (
		<>
			<div className="auth-container">
				<form action="/">
					<h2>Inscription</h2>

					<div className="block-input">
						<label htmlFor="username">Pseudo :</label>
						<Buttons
							type="text"
							id="username"
							name="username"
							placeholder="Ecrire ici"
						/>
					</div>

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

					<Buttons type="submit" id="submit" value="S'inscrire" />
				</form>
			</div>
		</>
	);
}
