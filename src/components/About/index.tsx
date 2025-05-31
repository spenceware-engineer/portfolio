'use client'

import styles from './about.module.css'
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import aboutDataQuery from '../../queries/aboutDataQuery'
import { client } from '../../sanity/lib/client'
import { useEffect, useState } from 'react'
import DynamicFaIcon from '../DynamicIcon/DynamicFaIcon'
import DynamicSiIcon from '../DynamicIcon/DynamicSiIcon'
import DynamicTbIcon from '../DynamicIcon/DynamicTbIcon'
import type AboutData from '../../types/AboutData'
import QuickFact from '../../types/AboutData/QuickFact'
import BioSection from '../../types/AboutData/BioSection'
import BioChild from '../../types/AboutData/BioChild'

export default () => {
  const [aboutData, setAboutData] = useState<AboutData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    client.fetch(aboutDataQuery).then((data) => {
      setAboutData(data[0])
      setLoading(false)
    })
  }, [])

  if (loading) return null

  console.log(aboutData)

  return (
    <section className={styles.container}>
      <div className={styles.about}>
        <Typography variant='h4' sx={{ margin: '10px 0' }}>
          About Me
        </Typography>
        {aboutData?.bio.map((bioSection: BioSection) => {
          return (
            <Typography
              key={bioSection._key}
              variant='body1'
              sx={{ margin: '10px 0' }}
            >
              {bioSection.children
                .map((sect: BioChild) => {
                  return sect.text
                })
                .join(' ')}
            </Typography>
          )
        })}
        <Button
          href='Cynthia_Spence_Resume.pdf'
          download={`${aboutData?.resumeBtnLabel}.pdf`}
          variant='contained'
          sx={{ margin: '10px 0' }}
        >
          {aboutData?.resumeBtnLabel}
        </Button>
      </div>
      <div>
        <Typography variant='h6'>Quick Facts</Typography>
        <List>
          {aboutData?.quickFacts.map((fact: QuickFact) => {
            return (
              <ListItem key={fact._key}>
                <ListItemIcon>
                  {fact.icon.library === 'fa' ? (
                    <DynamicFaIcon icon={fact.icon.icon} color='#2f7b7c' size={32} />
                  ) : fact.icon.library === 'si' ? (
                    <DynamicSiIcon slug={fact.icon.icon} color='#2f7b7c' size={32} />
                  ) : (
                    <DynamicTbIcon icon={fact.icon.icon} color='#2f7b7c' size={32} />
                  )}
                </ListItemIcon>
                <ListItemText>{fact.label}</ListItemText>
              </ListItem>
            )
          })}
        </List>
      </div>
    </section>
  )
}
