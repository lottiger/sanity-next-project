import BodyTextSection from '@/components/sections/BodyTextSection';
import ImageSection from '@/components/sections/ImageSection';
import SubheadingSection from '@/components/sections/SubheadingSection';
import TitleSection from '@/components/sections/TitleSection';
import { client } from '@/sanity/client';
import { Section } from '@/types/sections';

const query = `*[_type == "about"][0]{
  sections
}`;

export default async function AboutPage() {
	const data = await client.fetch<{ sections: Section[] }>(query);

	return (
		<main className="max-w-[400px] mx-auto px-6 py-12">
			{data?.sections?.map((section, index) => {
				switch (section._type) {
					case 'titleSection':
						return <TitleSection key={index} text={section.text} />;

					case 'subheadingSection':
						return (
							<SubheadingSection
								key={index}
								text={section.text}
							/>
						);

					case 'bodyTextSection':
						return (
							<BodyTextSection
								key={index}
								content={section.content}
							/>
						);

					case 'imageSection':
						return (
							<ImageSection
								key={index}
								image={section.image}
								caption={section.caption}
							/>
						);

					default:
						return (
							<p key={index} className="text-red-600">
								Unknown section type: {(section as any)._type}
							</p>
						);
				}
			})}
		</main>
	);
}
