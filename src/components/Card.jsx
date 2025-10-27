import "../styles/Card.css";

import Buttons from "./Buttons";

export default function Card({ title, nbrTracks }) {
	return (
		<>
			<article>
				<h2>{title}</h2>
				<p>{nbrTracks} projects</p>
				<footer>
					<Buttons className="get" href="/" text="Voir" />
					<Buttons className="delete" text="Supprimer" />
				</footer>
			</article>
		</>
	);
}
