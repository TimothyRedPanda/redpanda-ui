import { useState } from "react";
import sanitizeInput from "./sanitiseInput";
import TickIcon from "./Tick";

interface InputProps {
	type: "checkbox" | "radio" | "date" | "text" | "number";
	defaultValue?: string;
	className?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
	sanitized?: boolean;
}

export const Input: React.FC<InputProps> = ({
	type,
	defaultValue,
	className,
	onChange,
	onClick,
	sanitized,
}) => {
	const [value, setValue] = useState(defaultValue || "");
	const [checked, setChecked] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const sanitizedValue = sanitizeInput(e.target.value); // Basic sanitization
		sanitized ? setValue(sanitizedValue) : setValue(e.target.value);
		onChange?.(e);
	};

	const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
		type === "radio" || type === "checkbox"
			? setChecked(!checked)
			: setChecked(checked);
		onClick?.(e);
	};

	switch (type) {
		case "checkbox":
			return (
				<span
					className={`${checked ? "bg-amber-500" : "bg-amber-50"} inline-block aspect-square relative rounded-md transition-all duration-1000 h-6 w-6 border-2 border-amber-500 ${className}`}
				>
					<input
						type={type}
						id="switch"
						className="w-full h-full opacity-0 cursor-pointer"
						onClick={handleClick}
					/>
					<span className="absolute pointer-events-none top-0 left-0 w-full h-full p-1 flex items-center justify-center text-white">
						<TickIcon visible={checked ? "visible" : "invisible"} />
					</span>
				</span>
			);
		case "radio":
			return (
				<span
					className={`${checked ? "bg-amber-500" : "bg-amber-50"} relative rounded-full transition-all duration-1000 h-6 w-6 border-2 border-amber-500 ${className}`}
					style={{
						display: "inline-block",
						aspectRatio: "1 / 1",
					}}
				>
					<input
						type={type}
						id="switch"
						className="w-full h-full opacity-0 cursor-pointer"
						onClick={handleClick}
					/>
					<span className="absolute pointer-events-none inset-0 flex items-center justify-center">
						<span className="rounded-full w-3 h-3 bg-white" />
					</span>
				</span>
			);
		default:
			return (
				<input
					type={type}
					id="switch"
					className={`py-2 px-4 h-fit w-fit border-2 border-amber-200 rounded-md focus:outline-none focus:border-amber-500 ${className}`}
					value={value}
					onChange={handleChange}
				/>
			);
	}
};
