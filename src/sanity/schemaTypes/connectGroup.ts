import { defineField, defineType } from 'sanity'

export const connectGroup = defineType({
  name: 'connectGroup',
  title: 'Connect Group',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'day', type: 'string' }),
    defineField({ name: 'time', type: 'string' }),
    defineField({ name: 'location', type: 'string' }),
    defineField({
      name: 'leaders',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'description', type: 'text' }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: [
          { title: 'Men', value: 'men' },
          { title: 'Women', value: 'women' },
          { title: 'Mixed', value: 'mixed' },
        ],
      },
    }),
    defineField({ name: 'childFriendly', type: 'boolean', initialValue: false }),
  ],
})
