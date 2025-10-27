import "../styles/Header.css";

import Buttons from "./Buttons";

export default function Header() {
	return (
		<>
			<header>
				<a href="/">
					<h1>My AOTY</h1>
				</a>
				<nav>
					<ul>
						<li>
							<Buttons href="/login" text="Sign in" />
						</li>
						<li>
							<Buttons className="sign-up" href="/register" text="Sign up" />
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
