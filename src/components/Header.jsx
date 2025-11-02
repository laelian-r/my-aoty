import "../styles/Header.css";

import { useAuth } from "../hooks/useAuth";
import { getUserById } from "../utils/authentification";
import { useEffect, useState } from "react";

import Buttons from "./Buttons";

export default function Header() {
	const { user } = useAuth();

	if (!user) {
		return (
			<>
				<header>
					<a href="/">
						<h1>My AOTY</h1>
					</a>
					<nav>
						<ul>
							<li>
								<Buttons href="/login" text="Connexion" />
							</li>
							<li>
								<Buttons
									className="sign-up"
									href="/register"
									text="Inscription"
								/>
							</li>
						</ul>
					</nav>
				</header>
			</>
		);
	} else {
		return (
			<>
				<header>
					<a href="/">
						<h1>My AOTY</h1>
					</a>
					<nav>
						<ul>
							<li>
								<Buttons href="/" text="Déconnexion" className="sign-up" />
							</li>
						</ul>
					</nav>
				</header>
			</>
		);
	}
}
