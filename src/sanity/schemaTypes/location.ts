import { defineField, defineType } from 'sanity'

export const location = defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'address', type: 'string' }),
    defineField({ name: 'serviceTimes', type: 'string' }),
    defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'mapUrl', type: 'url' }),
  ],
})
