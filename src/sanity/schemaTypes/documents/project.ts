import { defineField, defineType } from 'sanity'
import { repoType } from '../enums/repoType'
import { projectStatus } from '../enums/projectStatus'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'skill' }],
        },
      ],
    }),
    defineField({
      name: 'highlights',
      title: 'Project Highlights',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'links',
      title: 'Project Links',
      type: 'array',
      of: [{ type: 'link' }],
    }),
    defineField({
      name: 'repoType',
      title: 'Repository Type',
      type: 'string',
      options: {
        list: repoType,
      },
    }),
    defineField({
      name: 'projectStatus',
      title: 'Project Status',
      type: 'string',
      options: {
        list: projectStatus,
      },
    }),
  ],
})
