import type { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps): ReactNode => {
	return (
		<button
			className="px-4 py-2 bg-amber-400 shadow-custom hover:bg-amber-500 transition-all text-amber-950 rounded-3xl"
			type="button"
			onClick={onClick}
		>
			{children}
		</button>
	);
};
