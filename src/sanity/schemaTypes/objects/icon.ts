import { defineField, defineType } from 'sanity'
import { iconLibrary } from '../enums/iconLibrary'

export default defineType({
  name: 'icon',
  title: 'Icon',
  type: 'object',
  fields: [
    defineField({
      name: 'library',
      title: 'Library',
      type: 'string',
      options: {
        list: iconLibrary,
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
