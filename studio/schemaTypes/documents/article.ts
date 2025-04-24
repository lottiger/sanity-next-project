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
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'object',
      fields: [
        {name: 'name', type: 'string', title: 'Name'},
        {
          name: 'image',
          type: 'image',
          title: 'Profile image',
          options: {hotspot: true},
        },
      ],
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
  ],
})
