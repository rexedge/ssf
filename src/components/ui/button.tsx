import Link from 'next/link';

interface ButtonProps {
	children: React.ReactNode;
	href?: string;
	onClick?: () => void;
	className?: string;
}

const Button = ({ children, href, onClick, className }: ButtonProps) => {
	const buttonClasses =
		'px-4 py-2 rounded-md text-sm transition duration-500 hover:opacity-80 uppercase';

	if (href) {
		return (
			<Link href={href}>
				<span className={`${buttonClasses} ${className}`}>
					{children}
				</span>
			</Link>
		);
	}

	return (
		<button
			className={`${buttonClasses} ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
