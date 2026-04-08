import { defineField, defineType } from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'description', type: 'text' }),
    defineField({ name: 'date', type: 'datetime' }),
    defineField({ name: 'endDate', type: 'datetime' }),
    defineField({ name: 'time', type: 'string' }),
    defineField({ name: 'location', type: 'string' }),
    defineField({ name: 'address', type: 'string' }),
    defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'actionLabel', type: 'string' }),
    defineField({ name: 'actionUrl', type: 'url' }),
    defineField({ name: 'recurring', type: 'boolean', initialValue: false }),
    defineField({ name: 'featured', type: 'boolean', initialValue: false }),
  ],
})
