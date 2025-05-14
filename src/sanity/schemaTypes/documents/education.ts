import {defineField, defineType} from 'sanity'
import {programType} from '../enums/programType'

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'programName',
      title: 'Program Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'institutions',
      title: 'Institutions',
      type: 'array',
      of: [{type: 'institution'}],
    }),
    defineField({
      name: 'complete',
      title: 'Completed',
      type: 'boolean',
    }),
    defineField({
      name: 'completedDate',
      title: 'Date Completed',
      type: 'date',
      options: {
        dateFormat: 'MM-DD-YYYY',
      },
    }),
    defineField({
      name: 'description',
      title: 'Program Description',
      type: 'string',
    }),
    defineField({
      name: 'skills',
      title: 'Skills Learned',
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
      name: 'certImage',
      title: 'Certification Image',
      type: 'image',
    }),
    defineField({
      name: 'certLink',
      title: 'Link to Certification',
      type: 'url',
    }),
    defineField({
      name: 'transcript',
      title: 'Transcript (PDF)',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    }),
    defineField({
      name: 'programType',
      title: 'Type of Program',
      type: 'string',
      options: {
        list: programType,
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'online',
      title: 'Online',
      type: 'boolean',
    }),
    defineField({
      name: 'grade',
      title: 'Grade',
      type: 'number',
    }),
    defineField({
      name: 'honors',
      title: 'Honors',
      type: 'boolean',
    }),
    defineField({
      name: 'displayCert',
      title: 'Display Certification',
      type: 'boolean',
    }),
  ],
})
