import "../styles/Folder.css";

import { useNavigate, useParams, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { getFolderById } from "../utils/authentification";
import { useEffect, useState } from "react";

import Buttons from "../components/Buttons";

export default function Folder() {
	const { folderId } = useParams();
	const [folder, setFolder] = useState(null);
	const { user } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) return;

		const folderFound = getFolderById(parseInt(folderId));

		if (!folderFound) {
			navigate(`/home/${user.id}`);
			return;
		}

		// Vérifier que le dossier appartient bien à l'utilisateur connecté
		if (folderFound.id_user !== user.id) {
			navigate(`/home/${user.id}`);
			return;
		}

		setFolder(folderFound);
	}, [folderId, user, navigate]);

	if (!user) {
		return <Navigate to="/login" />;
	}

	if (!folder) {
		return <p>Chargement...</p>;
	}

	return (
		<>
			<div className="folder-container">
				<div className="folder-header">
					<h2>Année {folder.year}</h2>
					<p>{folder.projectsCount} projet(s)</p>
				</div>

				<div className="projects-list">
					{folder.projects.length > 0 ? (
						folder.projects.map((project) => (
							<div key={project.id} className="project-card">
								<div
									className="project-cover"
									style={{
										background: project.cover.startsWith("http")
											? `url(${project.cover})`
											: project.cover,
										backgroundSize: "cover",
										backgroundPosition: "center",
									}}
								/>
								<div className="project-info">
									<h3>{project.title}</h3>
									<p>{project.artist}</p>
									{project.spotifyUrl && (
										<a
											href={project.spotifyUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="spotify-link"
										>
											<i className="fa-brands fa-spotify"></i> Écouter sur
											Spotify
										</a>
									)}
								</div>
							</div>
						))
					) : (
						<p className="no-projects">
							Aucun projet dans ce dossier. Ajoutez-en un !
						</p>
					)}
				</div>

				<Buttons
					className="add"
					text={
						<>
							<i className="fa-solid fa-plus"></i>
							Ajouter un projet
						</>
					}
				/>
			</div>
		</>
	);
}
