import type { PortableTextBlock } from '@portabletext/types';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export type TitleSection = {
	_type: 'titleSection';
	text: string;
};

export type SubheadingSection = {
	_type: 'subheadingSection';
	text: string;
};

export type BodyTextSection = {
	_type: 'bodyTextSection';
	content: PortableTextBlock[];
};

export type ImageSection = {
	_type: 'imageSection';
	image: SanityImageSource;
	caption?: string;
	layout?: 'default' | 'two-column' | 'small' | 'large';
};

export type ImageRowSection = {
	_type: 'imageRowSection';
	layout: 'two-column' | 'three-column';
	images: SanityImageSource[];
};

export type ImageWithTextSection = {
	_type: 'imageWithTextSection';
	image: SanityImageSource;
	text: PortableTextBlock[];
	layout?: 'image-left' | 'image-right';
};

export type Section =
	| TitleSection
	| SubheadingSection
	| BodyTextSection
	| ImageSection
	| ImageRowSection
	| ImageWithTextSection;
