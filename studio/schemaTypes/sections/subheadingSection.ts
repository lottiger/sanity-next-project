import {defineType} from 'sanity'

export const subheadingSection = defineType({
  name: 'subheadingSection',
  title: 'Subheading',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Subrubrik',
      type: 'string',
    },
  ],
  preview: {
    select: {title: 'text'},
    prepare({title}) {
      return {title: `Subheading: ${title}`}
    },
  },
})
