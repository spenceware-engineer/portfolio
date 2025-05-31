import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'prefName',
      title: 'Preferred Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'quickFacts',
      title: 'Quick Facts',
      type: 'array',
      of: [{ type: 'quickFact' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'resume',
      title: 'Resume (PDF)',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    }),
    defineField({
      name: 'resumeBtnLabel',
      title: 'Resume Button Label',
      type: 'string',
    }),
    defineField({
      name: 'resumeDownloadName',
      title: 'Resume Download Name',
      type: 'string',
      description:
        'Enter the name to use for the downloaded resume file, excluding the file extension.',
    }),
    defineField({
      name: 'ctaBtnLabel',
      title: 'Call to Action Button Label',
      type: 'string',
    }),
    defineField({
      name: 'ctaBtnLink',
      title: 'Call to Action Button Link',
      type: 'url',
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'link' }],
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'Format: +18885554444',
      validation: (rule) =>
        rule
          .regex(/^\+1\d{10}$/)
          .error(
            'Enter a US phone number in the following format: +18885554444.',
          ),
    }),
    defineField({
      name: 'profilePic',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
