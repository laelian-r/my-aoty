import "../styles/Card.css";

import Buttons from "./Buttons";

export default function Card({ title, nbrTracks }) {
	return (
		<>
			<article>
				<h2>{title}</h2>
				<p>{nbrTracks} projets</p>
				<footer>
					<Buttons
						className="get"
						href="/"
						text={
							<>
								<i className="fa-solid fa-eye"></i>
								Voir
							</>
						}
					/>
					<Buttons
						className="delete"
						text={
							<>
								<i className="fa-solid fa-trash" />
								Supprimer
							</>
						}
					/>
				</footer>
			</article>
		</>
	);
}
