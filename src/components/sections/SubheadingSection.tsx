type Props = {
	text: string;
};

export default function SubheadingSection({ text }: Props) {
	return <h2 className="text-2xl mt-6 font-serif">{text}</h2>;
}
