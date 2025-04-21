import {defineType} from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'About us',
  type: 'document',
  fields: [
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {type: 'titleSection'},
        {type: 'subheadingSection'},
        {type: 'bodyTextSection'},
        {type: 'imageSection'},
      ],
    },
  ],
})
