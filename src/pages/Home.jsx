import "../styles/Home.css";

import { useNavigate, useParams, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { getUserById, getFoldersByUserId } from "../utils/authentification";
import { useEffect, useState } from "react";

import Card from "../components/Card";
import Buttons from "../components/Buttons";

export default function Home() {
	const { homeId } = useParams();
	const [userHome, setUserHome] = useState(null);
	const [userFolders, setUserFolders] = useState([]);

	const { user } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		const userHomeFound = getUserById(parseInt(homeId));

		if (!userHomeFound) return;

		setUserHome(userHomeFound);

		// Récupérer les dossiers de l'utilisateur
		const folders = getFoldersByUserId(userHomeFound.id);
		setUserFolders(folders);
	}, [homeId]);

	if (!user) {
		return <Navigate to="/login" />;
	}

	// Vérifier que l'utilisateur connecté accède bien à sa propre page
	if (user.id !== parseInt(homeId)) {
		return <Navigate to={`/home/${user.id}`} replace />;
	}

	return (
		<>
			<section>
				{userFolders.length > 0 ? (
					userFolders.map((folder) => (
						<Card
							key={folder.id}
							id={folder.id}
							title={folder.year.toString()}
							nbrTracks={folder.projectsCount}
						/>
					))
				) : (
					<p>Aucun dossier trouvé. Commencez par en créer un !</p>
				)}
			</section>
			<Buttons
				className="add"
				text={
					<>
						<i className="fa-solid fa-plus"></i>
						Ajouter
					</>
				}
			/>
		</>
	);
}
