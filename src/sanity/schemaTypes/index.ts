import { type SchemaTypeDefinition } from 'sanity'
import education from './documents/education'
import experience from './documents/experience'
import profile from './documents/profile'
import project from './documents/project'
import icon from './objects/icon'
import institution from './objects/institution'
import link from './objects/link'
import metrics from './objects/metrics'
import quickFact from './objects/quickFact'
import skill from './documents/skill'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    education,
    experience,
    profile,
    project,
    skill,
    icon,
    institution,
    link,
    metrics,
    quickFact,
  ],
}
