import "../styles/Auth.css";

import Buttons from "../components/Buttons";

export default function Login() {
	return (
		<>
			<div className="auth-container">
				<form action="/">
					<h2>Login</h2>

					<div className="block-input">
						<label htmlFor="username">Username :</label>
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
						<label htmlFor="password">Password :</label>
						<Buttons
							type="password"
							id="password"
							name="password"
							placeholder="Ecrire ici"
						/>
					</div>

					<Buttons type="submit" id="submit" value="Sign in" />
				</form>
			</div>
		</>
	);
}
