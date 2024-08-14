import type { FC } from "react";
interface LabelProps {
	label: string;
	size?: "small" | "base" | "large";
	className?: string;
}

const sizeMap = {
	small: "text-sm",
	base: "text-base",
	large: "text-lg",
};

export const Label: FC<LabelProps> = ({ label, size, className }) => {
	const sizeClass = sizeMap[size ?? "base"];
	return (
		<label
			htmlFor="switch"
			className={`${sizeClass} py-4 px-2 h-fit w-fit flex justify-center items-center flex-row font-inherit ${className}`}
		>
			{`${label}`}
		</label>
	);
};
