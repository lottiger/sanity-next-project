import { urlFor } from '@/sanity/image-url';
import Image from 'next/image';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

type Props = {
	image: SanityImageSource;
	caption?: string;
	layout?: 'full' | 'half' | 'small' | 'large';
};

export default function ImageSection({
	image,
	caption,
	layout = 'full',
}: Props) {
	let width = 800;
	let height = 500;
	let className = 'rounded';

	switch (layout) {
		case 'half':
			width = 400;
			height = 250;
			className += ' w-1/2';
			break;
		case 'small':
			width = 300;
			height = 200;
			className += ' w-[300px]';
			break;
		case 'large':
			width = 1000;
			height = 600;
			className += ' w-full';
			break;
		case 'full':
			width = 1200;
			height = 400;
			className += ' w-full';
			break;

		default:
			className += ' w-full';
			break;
	}

	return (
		<figure className="my-8 text-center">
			<Image
				src={urlFor(image).width(width).height(height).url()}
				alt={caption || ''}
				width={width}
				height={height}
				className={className}
			/>
			{caption && (
				<figcaption className="text-sm mt-2">{caption}</figcaption>
			)}
		</figure>
	);
}
