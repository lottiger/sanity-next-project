import { createClient } from 'next-sanity';

export const client = createClient({
	projectId: 'cb6xiqk5', // ← ditt Sanity projectId
	dataset: 'production',
	apiVersion: '2023-01-01', // ← sätt gärna dagens datum eller när projektet startades
	useCdn: true, // snabb cachead version
});
