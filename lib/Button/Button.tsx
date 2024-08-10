import type { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	onClick?: () => void;
	className?: string;
}

const classMap = {
	"": "bg-transparent text-slate-400 hover:text-slate-800 font-bold",
	contained: "bg-red-400 text-slate-100 hover:bg-red-800",
	outlined:
		"border border-red-500 text-slate-500 hover:bg-red-500 hover:text-slate-100",
	disabled:
		"bg-slate-700 text-slate-400 cursor-not-allowed pointer-events-none",
};

export const Button = ({
	children,
	onClick,
	className,
}: ButtonProps): ReactNode => {
	const buttonClassName = `${
		className?.includes("outlined")
			? classMap.outlined
			: className?.includes("contained")
				? classMap.contained
				: className?.includes("disabled")
					? classMap.disabled
					: classMap[""]
	} py-2 px-4 rounded-3xl transition-all`;

	return (
		<button className={buttonClassName} type="button" onClick={onClick}>
			{children}
		</button>
	);
};
