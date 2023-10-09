import "./App.css";
import { CardEntryForm } from "./CardEntryForm";
import { Instructions } from "./Instructions";
import mtgLogo from "../public/Magicthegathering-logo.svg.png";
import gitLogo from "../public/github-logo-white.svg";

function App() {
	return (
		<div
			id="page"
			style={{
				display: "flex",
				flexDirection: "column",
				height: "90vh",
				justifyContent: "space-between",
			}}
		>
			<div id="top">
				<img
					src={mtgLogo}
					height="100px"
					width="auto"
					title="MTG"
					alt="Magic the Gathering logo"
				/>
				<h1>Scryfall MTG Card Image Download Engine</h1>
			</div>

			<div
				id="middle-1"
				style={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<h4>Enter Magic Card Names (up to 50)</h4>
				<CardEntryForm />
				<Instructions />
			</div>

			<div className="bottom">
				<a href="https://github.com/AxiomaticAdi/">
					<img
						src={gitLogo}
						height="50px"
						width="auto"
						title="my github"
						alt="my github"
					/>
				</a>
			</div>
		</div>
	);
}

export default App;
