import { defineField, defineType } from 'sanity'

export const story = defineType({
  name: 'story',
  title: 'Story',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'person', type: 'string' }),
    defineField({ name: 'videoId', type: 'string' }),
    defineField({ name: 'thumbnail', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Commitment', value: 'Commitment' },
          { title: 'Community', value: 'Community' },
          { title: 'Conviction', value: 'Conviction' },
          { title: 'Identity', value: 'Identity' },
          { title: 'Finance', value: 'Finance' },
          { title: 'Sacrifice', value: 'Sacrifice' },
          { title: 'Relationships', value: 'Relationships' },
          { title: 'Family', value: 'Family' },
          { title: 'Finances', value: 'Finances' },
          { title: 'Faith', value: 'Faith' },
          { title: 'Salvation', value: 'Salvation' },
          { title: 'Miracles', value: 'Miracles' },
        ],
      },
    }),
    defineField({ name: 'location', type: 'string' }),
    defineField({ name: 'publishedAt', type: 'datetime' }),
  ],
})
