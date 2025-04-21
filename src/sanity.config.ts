import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '../studio/schemaTypes';

export default defineConfig({
	name: 'default',
	title: 'My Sanity Project',
	basePath: '/studio',
	projectId: 'cb6xiqk5',
	dataset: 'production',

	plugins: [structureTool(), visionTool()],

	schema: {
		types: schemaTypes,
	},
});
