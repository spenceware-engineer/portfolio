import {defineField, defineType} from 'sanity'
import {interactionMetric} from '../enums/interactionMetric'

export default defineType({
  name: 'metrics',
  title: 'Metrics',
  type: 'object',
  fields: [
    defineField({
      name: 'feWeight',
      title: 'Frontend Weight',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'beWeight',
      title: 'Backend Weight',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'interactionLvl',
      title: 'Interaction Level',
      type: 'string',
      options: {
        list: interactionMetric,
      },
      validation: (rule) => rule.required(),
    }),
  ],
})
