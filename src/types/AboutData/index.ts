import type Resume from './Resume'
import type QuickFact from './QuickFact'
import BioSection from './BioSection'

type AboutData = {
  bio: BioSection[]
  quickFacts: QuickFact[]
  resume: Resume
  resumeBtnLabel: string
  resumeDownloadName: string
}

export default AboutData
