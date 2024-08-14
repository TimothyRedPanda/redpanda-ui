import type { FC, ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	onClick?: () => void;
	variant?: "contained" | "outlined" | "disabled";
	size?: "small" | "base" | "large";
	className?: string;
}

const classMap = {
	"": "bg-transparent text-slate-400 hover:text-slate-800 font-bold",
	contained: "bg-amber-500 text-slate-50 hover:bg-amber-400",
	outlined:
		"border border-amber-500 bg-amber-500 bg-opacity-0 text-slate-500 hover:bg-opacity-10",
	disabled:
		"bg-slate-700 text-slate-400 cursor-not-allowed pointer-events-none font-inherit",
};

const sizeMap = {
	small: "text-sm",
	base: "text-base",
	large: "text-lg",
};

export const Button: FC<ButtonProps> = ({
	children,
	onClick,
	variant,
	size,
	className,
}) => {
	const variantStyle = classMap[variant ?? ""];
	const sizeClass = sizeMap[size ?? "base"];

	return (
		<button
			className={`${variantStyle} ${sizeClass} ${className} py-2 px-4 rounded-3xl transition-all w-fit duration-500 h-fit`}
			type="button"
			onClick={onClick}
		>
			{children}
		</button>
	);
};
