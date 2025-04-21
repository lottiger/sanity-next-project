import { client } from '@/sanity/client';
import { urlFor } from '@/sanity/image-url';
import { PortableText } from '@portabletext/react';
import { format } from 'date-fns';
import { sv } from 'date-fns/locale';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type Props = {
	params: {
		slug: string;
	};
};

const query = `*[_type == "event" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  date,
  location,
  image,
  description
}`;

export default async function EventPage({ params }: Props) {
	const event = await client.fetch(query, { slug: params.slug });

	if (!event) {
		notFound();
	}

	return (
		<main className="flex flex-col justify-center items-center mx-auto p-6 space-y-6 mt-20 w-[800px] text-center">
			{event.image && (
				<Image
					src={urlFor(event.image).width(600).height(300).url()}
					alt={event.title}
					width={600}
					height={300}
					className=""
				/>
			)}

			<h1 className="text-3xl font-serif">{event.title}</h1>

			<p className="">
				{format(new Date(event.date), 'PPPp', { locale: sv })}
				{event.location && ` • ${event.location}`}
			</p>

			{event.description && (
				<div className="">
					<PortableText value={event.description} />
				</div>
			)}
		</main>
	);
}
