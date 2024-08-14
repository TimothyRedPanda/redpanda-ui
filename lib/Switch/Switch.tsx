import type { FC } from "react";

interface SwitchProps {
	onClick?: () => void;
	variant?: "live" | "disabled" | "";
	className?: string;
}

const classMap = {
	default: "bg-blue-950 peer-checked:bg-amber-400 cursor-pointer",
	live: "bg-blue-950 peer-checked:bg-amber-400 cursor-pointer",
	disabled:
		"bg-slate-700 pointer-events-none click-events-none cursor-none opacity-50",
};

export const Switch: FC<SwitchProps> = ({ variant, onClick, className }) => {
	const variantStyles = classMap[variant || "default"];
	return (
		<label
			className={`${variantStyles} relative inline-block w-16 h-8 rounded-full ${className}`}
		>
			<input
				type="checkbox"
				id="switch"
				className="opacity-0 w-0 h-0 peer"
				onClick={onClick}
			/>
			<span
				className={`${variantStyles} absolute top-0 left-0 right-0 bottom-0  transition-all duration-1000 rounded-full`}
			/>
			<span className="absolute cursor-pointer left-1 top-1 w-6 h-6 transition-all duration-1000 bg-white rounded-full peer-checked:translate-x-8" />
		</label>
	);
};

export default Switch;