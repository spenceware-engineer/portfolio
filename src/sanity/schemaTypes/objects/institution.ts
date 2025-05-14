import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'institution',
  title: 'Institution',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Institution Name',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Institution Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'url',
      title: 'Institution Website',
      type: 'url',
    }),
  ],
})
