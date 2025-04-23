import Image from 'next/image';
import { urlFor } from '@/sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

import type { PortableTextBlock } from '@portabletext/types';
import { PortableText } from 'next-sanity';

type ImageWithTextProps = {
	image: SanityImageSource;
	text: PortableTextBlock[];
	layout?: 'image-left' | 'image-right';
};

export default function ImageWithTextSection({
	image,
	text,
	layout = 'image-left',
}: ImageWithTextProps) {
	const isImageLeft = layout === 'image-left';

	return (
		<section className="my-8 flex flex-col md:flex-row items-center gap-6">
			{isImageLeft && (
				<div className="w-full md:w-1/2">
					<Image
						src={urlFor(image).width(600).height(400).url()}
						alt=""
						width={600}
						height={400}
					/>
				</div>
			)}

			<div className="w-full md:w-1/2">
				<PortableText value={text} />
			</div>

			{!isImageLeft && (
				<div className="w-full md:w-1/2">
					<Image
						src={urlFor(image).width(600).height(400).url()}
						alt=""
						width={600}
						height={400}
					/>
				</div>
			)}
		</section>
	);
}
