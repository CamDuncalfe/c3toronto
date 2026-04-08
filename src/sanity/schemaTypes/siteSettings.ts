import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'churchName', type: 'string', validation: r => r.required() }),
    defineField({ name: 'description', type: 'text' }),
    defineField({ name: 'contactEmail', type: 'string' }),
    defineField({ name: 'liveStreamUrl', type: 'url' }),
    defineField({ name: 'givingUrl', type: 'url' }),
    defineField({
      name: 'socialLinks',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'platform', type: 'string' }),
            defineField({ name: 'url', type: 'url' }),
          ],
        },
      ],
    }),
  ],
})
