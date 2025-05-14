import {defineField, defineType} from 'sanity'
import {employmentType} from '../enums/employmentType'
import {workplaceSetting} from '../enums/workplaceSetting'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'institution',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      options: {
        dateFormat: 'MM-DD-YYYY',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      options: {
        dateFormat: 'MM-DD-YYYY',
      },
    }),
    defineField({
      name: 'currentRole',
      title: 'Current Role',
      type: 'boolean',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'employmentType',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: employmentType,
      },
    }),
    defineField({
      name: 'Workplace',
      title: 'Workplace Setting',
      type: 'string',
      options: {
        list: workplaceSetting,
      },
    }),
    defineField({
      name: 'metrics',
      title: 'Metrics',
      type: 'metrics',
    }),
    defineField({
      name: 'skills',
      title: 'Skills Used',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'skill'}],
        },
      ],
      validation: (rule) => rule.unique().error('Each skill must be unique'),
    }),
    defineField({
      name: 'duties',
      title: 'Duties',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
