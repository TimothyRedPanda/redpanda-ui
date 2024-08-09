import type { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
}

export const Button = ({ children }: ButtonProps): ReactNode => {
	return (
		<button
			className="px-4 py-2 bg-blue-500 text-white rounded-md"
			type="button"
		>
			{children}
		</button>
	);
};
