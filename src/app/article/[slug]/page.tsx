import { client } from '@/sanity/client';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import type { Section } from '@/types/sections';
import Image from 'next/image';
import { urlFor } from '@/sanity/image-url';
import SubheadingSection from '@/components/sections/SubheadingSection';
import ImageRowSection from '@/components/sections/ImageRowSection';
import ImageWithTextSection from '@/components/sections/ImageWithTextSection';

type Props = {
	params: { slug: string };
};

const query = `*[_type == "article" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    author {
      name,
      image
    },
    sections
  }`;

export default async function ArticlePage({ params }: Props) {
	const article = await client.fetch(query, { slug: params.slug });

	if (!article) {
		notFound();
	}

	return (
		<main className="max-w-3xl mx-auto p-6">
			<h1 className="text-3xl font-bold mb-4">{article.title}</h1>
			<div className="text-sm bg-white/5 mb-8 flex gap-2 flex-col p-4">
				<div className=" flex text-lg align-center gap-2 items-center">
					{article.author?.name && (
						<>
							{article.author.image && (
								<Image
									src={urlFor(article.author.image)
										.width(60)
										.height(60)
										.url()}
									alt={article.author.name}
									width={60}
									height={60}
									className="rounded-full"
								/>
							)}
							<div>
								<p>{article.author.name}</p>

								<p>Somelier & kock</p>
								<p className="text-sm text-gray-400">
									publicerat{' '}
									{new Date(
										article.publishedAt,
									).toLocaleDateString()}
								</p>
							</div>
						</>
					)}
				</div>
			</div>

			{article.sections?.map((section: Section, index: number) => {
				switch (section._type) {
					case 'titleSection':
						return <h2 key={index}>{section.text}</h2>;
					case 'subheadingSection':
						return (
							<SubheadingSection
								key={index}
								text={section.text}
							/>
						);
					case 'bodyTextSection':
						return (
							<PortableText key={index} value={section.content} />
						);
					case 'imageSection':
						const layout = section.layout || 'default';
						const imageClass =
							layout === 'two-column'
								? 'w-1/2 inline-block'
								: layout === 'small'
									? 'w-1/3'
									: layout === 'large'
										? 'w-full'
										: '';

						return (
							<figure
								key={index}
								className={`my-8 ${imageClass}`}
							>
								<Image
									src={urlFor(section.image)
										.width(800)
										.height(500)
										.url()}
									alt={section.caption || ''}
									width={800}
									height={500}
									className=""
								/>
								{section.caption && (
									<figcaption className="text-sm mt-2 text-center">
										{section.caption}
									</figcaption>
								)}
							</figure>
						);

					case 'imageRowSection':
						return (
							<ImageRowSection
								key={index}
								images={section.images}
								layout={section.layout || 'two-column'}
							/>
						);

					case 'imageWithTextSection':
						return (
							<ImageWithTextSection
								key={index}
								image={section.image}
								text={section.text}
								layout={section.layout}
							/>
						);

					default:
						return (
							<p key={index} className="text-red-600">
								{/* Unknown section type: {section._type} */}
							</p>
						);
				}
			})}
		</main>
	);
}
