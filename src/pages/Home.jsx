import "../styles/Home.css";

import { useNavigate, useParams, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { getUserById } from "../utils/authentification";
import { useEffect, useState } from "react";
import db from "../data/db.json";

import Card from "../components/Card";
import Buttons from "../components/Buttons";

export default function Home() {
	const { homeId } = useParams();
	const [userHome, setUserHome] = useState(null);

	const { user } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		const userHomeFound = getUserById(parseInt(homeId));

		if (!userHomeFound) return;

		setUserHome(userHomeFound); // Changed from setProfile to setUserHome
	}, [homeId]);

	if (!user) {
		return (
			<>
				<Navigate to="/login" />
			</>
		);
	} else {
		return (
			<>
				<section>
					{db.years.map((yearData) => (
						<Card
							key={yearData.id}
							title={yearData.year.toString()}
							nbrTracks={yearData.projectsCount}
						/>
					))}
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
}
