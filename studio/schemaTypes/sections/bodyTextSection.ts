import {defineType} from 'sanity'

export const bodyTextSection = defineType({
  name: 'bodyTextSection',
  title: 'Body text',
  type: 'object',
  fields: [
    {
      name: 'content',
      title: 'Brödtext',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
  preview: {
    prepare() {
      return {title: 'Body text'}
    },
  },
})
