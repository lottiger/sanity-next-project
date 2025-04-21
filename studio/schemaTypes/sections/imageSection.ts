import {defineType} from 'sanity'

export const imageSection = defineType({
  name: 'imageSection',
  title: 'Image',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Bild',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'caption',
      title: 'Bildtext',
      type: 'string',
    },
  ],
  preview: {
    select: {title: 'caption'},
    prepare({title}) {
      return {title: `Image: ${title || 'No caption'}`}
    },
  },
})
