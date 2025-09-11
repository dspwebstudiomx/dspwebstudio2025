type Props = {
	borderColor: string;
	children: React.ReactNode;
};
const Card = (props: Props) => {
	return (
		<div
			className={`border-2 ${props.borderColor} p-4 py-8 md:p-12 rounded-xl flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl min-h-[280px] items-start bg-gray-800`}>
			{props.children}
		</div>
	);
};

export default Card;
