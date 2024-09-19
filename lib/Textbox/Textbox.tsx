import sanitizeInput from "./sanitiseInput";
import { useState } from "react";

interface TextboxProps {
	rows?: number;
	cols?: number;
	name?: string;
	className?: string;
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	sanitized?: boolean;
	defaultValue?: string;
	placeholder?: string;
}

export const Textbox: React.FC<TextboxProps> = ({
	rows,
	cols,
	name,
	className,
	onChange,
	sanitized,
	placeholder,
}) => {
	const [value, setValue] = useState("");
	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const sanitizedValue = sanitizeInput(e.target.value); // Basic sanitization
		sanitized ? setValue(sanitizedValue) : setValue(e.target.value);
		onChange?.(e);
	};

	return (
		<textarea
			name={name || "textbox"}
			rows={rows || 4}
			cols={cols || 50}
			value={value}
			className={`scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-amber-400 scrollbar-track-transparent py-2 px-4 h-fit w-fit border-2 border-amber-200 rounded-md focus:outline-none focus:border-amber-500 ${className}`}
			onChange={handleChange}
			placeholder={placeholder || "Text area..."}
		/>
	);
};

export default Textbox;
