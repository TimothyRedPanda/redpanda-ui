import { Button } from "ui-redpanda";

function App() {
	return (
		<main
			style={{
				display: "flex",
				width: "100%",
				justifyContent: "center",
				overflow: "hidden",
			}}
		>
			<h1>Red Panda UI</h1>
			<Button className="custom">Click Me</Button>
		</main>
	);
}

export default App;
