import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'quickFact',
  title: 'Quick Fact',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      type: 'icon',
      title: 'Icon',
    }),
  ],
})
