// src/schemas/sections/imageWithTextSection.ts
import {defineType} from 'sanity'

export const imageWithTextSection = defineType({
  name: 'imageWithTextSection',
  title: 'Image with Text',
  type: 'object',
  fields: [
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Image left / Text right', value: 'image-left'},
          {title: 'Image right / Text left', value: 'image-right'},
        ],
        layout: 'radio',
      },
      initialValue: 'image-left',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
  preview: {
    select: {
      layout: 'layout',
      media: 'image',
    },
    prepare({layout}) {
      return {
        title: `Image with Text (${layout === 'image-left' ? 'Image Left' : 'Image Right'})`,
      }
    },
  },
})
