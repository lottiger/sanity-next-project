import Image from 'next/image';
import { urlFor } from '@/sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

type Props = {
	images: SanityImageSource[];
	layout: 'two-column' | 'three-column';
};

export default function ImageRowSection({ images, layout }: Props) {
	const columns = layout === 'two-column' ? 'grid-cols-2' : 'grid-cols-3';

	return (
		<div className={`grid ${columns} gap-4 my-8`}>
			{images.map((img, index) => (
				<div key={index} className="relative w-full aspect-[4/3]">
					<Image
						src={urlFor(img).width(600).height(450).url()}
						alt=""
						fill
						className="object-cover"
					/>
				</div>
			))}
		</div>
	);
}
