import { groq } from 'next-sanity'

export default groq`
*[_type == 'profile'] {
  bio,
  quickFacts,
  resume,
  resumeBtnLabel,
  resumeDownloadName
}
`
