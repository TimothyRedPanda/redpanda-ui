import { useState } from "react";
import sanitizeInput from "./sanitiseInput";

interface InputProps {
	type: string;
	defaultValue?: string;
	className?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
	type,
	defaultValue,
	className,
	onChange,
	onClick,
}) => {
	const [value, setValue] = useState(defaultValue || "");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const sanitizedValue = sanitizeInput(e.target.value); // Basic sanitization
		setValue(sanitizedValue);
		onChange?.(e);
	};

	const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
		onClick?.(e);
	};

	switch (type) {
		case "checkbox":
		case "radio":
			return (
				<span
					className={`${value ? "bg-amber-500" : "bg-amber-200"} rounded-full transition-all duration-1000 h-5 w-5 border-2 border-amber-500 ${className}`}
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
