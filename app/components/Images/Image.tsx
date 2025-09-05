import placeholder from "/images/placeholder.png?url";

type imageProps = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

const Image = (props: imageProps) => {
	return (
		<img
			src={props.src}
			alt={props.alt}
			width={props.width}
			height={props.height}
			srcSet=""
			className="border-4 border-blue-400 rounded-4xl"
			onError={(e) => {
				e.currentTarget.src = placeholder;
			}}
		/>
	);
};

export default Image;
