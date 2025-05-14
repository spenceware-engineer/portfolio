import {defineField, defineType} from 'sanity'
import {iconLibrary} from '../enums/iconLibrary'

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
      description: 'Enter the exact icon name from https://react-icons.github.io/react-icons/ (specifically from Bootstrap Icons, Font Awesome 5, Material Design Icons, or Simple Icons)',
      validation: (rule) => rule.required(),
    }),
  ],
})
