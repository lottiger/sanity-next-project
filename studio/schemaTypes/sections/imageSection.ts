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
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Full width', value: 'full'},
          {title: 'Half width (side by side)', value: 'half'},
          {title: 'Small', value: 'small'},
          {title: 'Large', value: 'large'},
        ],
        layout: 'radio',
      },
    },
  ],
  preview: {
    select: {
      title: 'caption',
      layout: 'layout',
    },
    prepare({title, layout}) {
      return {
        title: `Image: ${title || 'No caption'}`,
        subtitle: `Layout: ${layout || 'default'}`,
      }
    },
  },
})
