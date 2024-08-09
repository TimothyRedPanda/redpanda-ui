import type { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
}

export const Button = ({ children }: ButtonProps): ReactNode => {
	return (
		<button
			className="px-4 py-2 bg-amber-400 shadow-custom hover:bg-amber-500 transition-all text-amber-950 rounded-3xl"
			type="button"
		>
			{children}
		</button>
	);
};
