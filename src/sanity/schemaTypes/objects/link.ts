import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      type: 'icon',
      title: 'Icon',
    }),
    defineField({
      name: 'handle',
      type: 'string',
      title: 'Account Handle (Optional)',
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'URL',
    }),
  ],
})
