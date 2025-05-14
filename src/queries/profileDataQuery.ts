import { groq } from 'next-sanity'

export default groq`
*[_type == 'profile'] {
  firstName,
  lastName,
  tagline,
  title,
  ctaBtnLabel,
  ctaBtnLink
}
`
