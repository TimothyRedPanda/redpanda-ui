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
			<Button onClick={() => console.log("Hello, World!")}>
				Click Me!
			</Button>
		</main>
	);
}

export default App;
