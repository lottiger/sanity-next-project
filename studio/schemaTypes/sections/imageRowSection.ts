import {defineType} from 'sanity'

export const imageRowSection = defineType({
  name: 'imageRowSection',
  title: 'Image Row',
  type: 'object',
  fields: [
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Two column', value: 'two-column'},
          {title: 'Three column', value: 'three-column'},
        ],
        layout: 'radio',
      },
      initialValue: 'two-column',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
      validation: (Rule) => Rule.required().min(2).max(3),
    },
  ],
  preview: {
    select: {
      layout: 'layout',
      media: 'images.0',
    },
    prepare({layout}) {
      return {
        title: `Image Row (${layout})`,
      }
    },
  },
})
