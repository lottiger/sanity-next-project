import { PortableText, PortableTextBlock } from '@portabletext/react';

type Props = {
	content: PortableTextBlock[];
};

export default function BodyTextSection({ content }: Props) {
	return (
		<div className="">
			<PortableText value={content} />
		</div>
	);
}
