interface TickProps {
	visible?: "visible" | "invisible";
}

const TickIcon: React.FC<TickProps> = ({ visible }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
		<title>Tick Icon</title>
		<path
			d="m20 145 75 75L220 20"
			style={{
				fill: "none",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: 40,
			}}
			className={`w-full h-full ${visible === "visible" ? "stroke-slate-50" : "stroke-transparent"} transition-all duration-1000`}
		/>
	</svg>
);
export default TickIcon;
