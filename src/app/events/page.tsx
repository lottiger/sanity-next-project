import { client } from '@/sanity/client';
import { urlFor } from '@/sanity/image-url';
import { format } from 'date-fns';
import { sv } from 'date-fns/locale';
import Link from 'next/link';
import Image from 'next/image';
import type { Event } from '@/types/event';

const query = `*[_type == "event" && date > now()] | order(date asc){
  _id,
  title,
  slug,
  date,
  location,
  image
}`;

export default async function EventsPage() {
	const events: Event[] = await client.fetch(query);

	return (
		<main className="max-w-3xl mx-auto p-6">
			{/* <h1 className="text-4xl font-bold my-20 text-center ">
				Upcoming events
			</h1> */}
			<ul className="space-y-10 mt-20">
				{events.map((event) => (
					<li
						key={event._id}
						className="flex flex-col md:flex-row gap-4 border-b pb-6 items-start"
					>
						{event.image && (
							<div className="">
								<Image
									src={urlFor(event.image)
										.width(150)
										.height(60)
										.url()}
									alt={event.title}
									width={150}
									height={60}
									className=""
								/>
							</div>
						)}

						<div className="flex-1">
							<Link href={`/events/${event.slug.current}`}>
								<h2 className="text-xl font-serif mb-2">
									{event.title}
								</h2>
							</Link>
							<p className="text-sm text-gray-600 mb-2">
								{format(new Date(event.date), 'PPPp', {
									locale: sv,
								})}
								{event.location && ` • ${event.location}`}
							</p>
						</div>
					</li>
				))}
			</ul>
		</main>
	);
}
