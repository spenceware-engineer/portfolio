'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import styles from './dynamicFaIcon.module.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

// font awesome config and library
config.autoAddCss = false
library.add(fas, fab, far)
import type DynamicFaIconProps from '../../types/DynamicFaIconProps'

export default ({ icon, color, size }: DynamicFaIconProps) => {
  // @ts-ignore
  return <FontAwesomeIcon icon={icon.split('/')} style={{color, fontSize: `${size}px`}} />
}
