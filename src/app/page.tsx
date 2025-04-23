import { CalendarHeart, NotebookPen } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const landing = () => {
	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<h1 className="text-4xl font-bold">
				This is a minimalistic and simple landingpage
			</h1>
			<Link
				href="/about-us"
				className="text-blue-300 mt-4 hover:underline ml-4 mb-10"
			>
				Curious? Click here to learn more about us!
			</Link>
			<div className=" flex gap-20 mt-10 text-center ">
				<div className="hover:scale-110 transition-transform duration-300">
					<Link href="/events">
						<CalendarHeart size={100} />
						<p className="">Events</p>
					</Link>
				</div>
				<div className="hover:scale-110 transition-transform duration-300">
					<Link href="/article">
						<NotebookPen size={100} />
						<p>Articles</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default landing;
