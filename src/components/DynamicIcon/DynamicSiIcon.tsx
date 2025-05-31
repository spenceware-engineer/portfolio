import parse from 'html-react-parser'
import * as icons from 'simple-icons'
import type { SimpleIcon } from 'simple-icons'
import { SvgIcon } from '@mui/material'
import type DynamicSiIconProps from '../../types/DynamicSiIconProps'

export default ({ slug, color, size }: DynamicSiIconProps) => {
  // @ts-ignore
  const SiIcon = Object.values(icons).filter(
    // @ts-ignore
    (icon: SimpleIcon) => icon.slug === slug,
  )[0]

  console.log(SiIcon)

  // @ts-ignore
  return (
    <SvgIcon color={color} fontSize={`${size}px`}>
      {parse(SiIcon.svg)}
    </SvgIcon>
  )
}
