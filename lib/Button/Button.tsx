import type { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	onClick?: () => void;
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
	} py-2 px-4 rounded-3xl transition-all w-fit duration-500`;

	return (
		<button className={buttonClassName} type="button" onClick={onClick}>
			{children}
		</button>
	);
};
