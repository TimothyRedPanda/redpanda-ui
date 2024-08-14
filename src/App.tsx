import { Button } from "ui-redpanda";

function App() {
	return (
		<main
			style={{
				display: "flex",
				width: "100%",
				justifyContent: "center",
				overflow: "hidden",
				fontWeight: 600,
				fontFamily: "fantasy",
			}}
		>
			<h1>Red Panda UI</h1>
			<Button variant="outlined">Click Me</Button>
		</main>
	);
}

export default App;
