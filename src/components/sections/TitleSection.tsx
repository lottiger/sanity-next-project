type Props = {
	text: string;
};

export default function TitleSection({ text }: Props) {
	return <h1 className="text-4xl font-bold my-8">{text}</h1>;
}
