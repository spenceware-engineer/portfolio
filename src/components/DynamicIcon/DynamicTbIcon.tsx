import * as TablerIcons from 'tabler-icons-react'
import type DynamicTbIconProps from '../../types/DynamicTbIconProps'

export default ({ icon, color, size }: DynamicTbIconProps) => {
  console.log(icon)

  // @ts-ignore
  const TablerIcon = TablerIcons[icon]

  return <TablerIcon color={color} size={size} />
}
