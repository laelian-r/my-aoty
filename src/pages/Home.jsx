import "../styles/Home.css";

import Card from "../components/Card";

export default function Home() {
	return (
		<>
			<section>
				<Card title="2025" nbrTracks={12} />
				<Card title="2024" nbrTracks={8} />
				<Card title="2023" nbrTracks={5} />
				<Card title="2022" nbrTracks={10} />
			</section>
		</>
	);
}
