import { defineField, defineType } from 'sanity'

export const pastor = defineType({
  name: 'pastor',
  title: 'Pastor',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'role', type: 'string' }),
    defineField({ name: 'bio', type: 'text' }),
    defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'instagramHandle', type: 'string' }),
    defineField({ name: 'instagramUrl', type: 'url' }),
    defineField({ name: 'order', type: 'number' }),
  ],
})
