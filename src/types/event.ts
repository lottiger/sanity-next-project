import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export type Event = {
	_id: string;
	title: string;
	slug: {
		current: string;
	};
	date: string;
	location?: string;
	image?: SanityImageSource;
};
