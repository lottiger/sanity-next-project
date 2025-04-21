import {defineType} from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Datum',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Plats',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Bild',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'description',
      title: 'Beskrivning',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
})
