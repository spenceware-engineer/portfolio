import {defineField, defineType} from 'sanity'
import {skillCategoryOptions} from '../enums/skillCategory'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Skill Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'icon',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: skillCategoryOptions,
      },
      validation: (rule) => rule.required(),
    }),
  ],
})
