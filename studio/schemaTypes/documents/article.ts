import {defineType} from 'sanity'

export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {type: 'titleSection'},
        {type: 'subheadingSection'},
        {type: 'bodyTextSection'},
        {type: 'imageSection'},
        {type: 'imageRowSection'},
        {type: 'imageWithTextSection'},
      ],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
  ],
})
