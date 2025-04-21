import {defineType} from 'sanity'

export const titleSection = defineType({
  name: 'titleSection',
  title: 'Title',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Titeltext',
      type: 'string',
    },
  ],
  preview: {
    select: {title: 'text'},
    prepare({title}) {
      return {title: `Title: ${title}`}
    },
  },
})
