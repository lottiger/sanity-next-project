import { client } from '@/sanity/client';
import Link from 'next/link';
import { format } from 'date-fns';
import { sv } from 'date-fns/locale';

type Article = {
	_id: string;
	title: string;
	slug: { current: string };
	_createdAt: string;
};

const query = `*[_type == "article"] | order(_createdAt desc){
  _id,
  title,
  slug,
  _createdAt
}`;

export default async function ArticleListPage() {
	const articles: Article[] = await client.fetch(query);

	return (
		<main className="max-w-3xl mx-auto px-6 py-12">
			<h1 className="text-4xl font-extrabold mb-4 text-center">
				News-Thoughts-Reflections
			</h1>
			<p className="text-gray-300 mb-20 font-serif">
				Here you can find our latest articles and reflections on various
				subjects. We hope you enjoy reading them as much as we enjoyed
				writing them, cheers!
			</p>
			<ul className="space-y-6">
				{articles.map((article) => (
					<li
						key={article._id}
						className="flex justify-between items-center hover:bg-white/5 p-4 transition-colors duration-300"
					>
						<Link
							href={`/article/${article.slug.current}`}
							className="text-xl "
						>
							{article.title}
						</Link>
						<p className="text-sm">
							{format(new Date(article._createdAt), 'PPP', {
								locale: sv,
							})}
						</p>
					</li>
				))}
			</ul>
		</main>
	);
}
