import { urlFor } from '@/sanity/image-url';
import Image from 'next/image';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

type Props = {
	image: SanityImageSource;
	caption?: string;
};

export default function ImageSection({ image, caption }: Props) {
	return (
		<figure className="my-8">
			<Image
				src={urlFor(image).width(800).height(500).url()}
				alt={caption || ''}
				width={800}
				height={500}
				className="rounded"
			/>
			{caption && (
				<figcaption className="text-sm mt-2 text-center">
					{caption}
				</figcaption>
			)}
		</figure>
	);
}
