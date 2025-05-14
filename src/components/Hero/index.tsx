import styles from './hero.module.css'
import { Avatar, Button, Typography } from '@mui/material'
import { client } from '../../sanity/lib/client'
import { useEffect, useState } from 'react'
import profileDataQuery from '../../queries/profileDataQuery'
import type ProfileData from '../../types/ProfileData'

export default () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client.fetch(profileDataQuery).then((data) => {
      setProfileData(data[0])
      setLoading(false)
    })
  }, [])

  if (loading) return null

  return (
    <section className={styles.container}>
      <Avatar sx={{ height: '20vw', marginTop: '20px', width: '20vw' }} />
      <Typography className={styles.hero_name} variant='h1'>
        {profileData?.firstName} {profileData?.lastName}
      </Typography>
      <Typography className={styles.hero_title} variant='h3'>
        {profileData?.title}
      </Typography>
      <Typography className={styles.hero_tagline} variant='h4'>
        {profileData?.tagline}
      </Typography>
      <Button
        variant='contained'
        sx={{
          bgcolor: '#2f7b7c',
          color: '#181a1b',
          fontSize: 24,
          fontWeight: 'bold',
          padding: '10px 28px',
          textTransform: 'capitalize',
          marginBottom: '20px',
        }}
        target='_blank'
        href={profileData?.ctaBtnLink || ''}
      >
        {profileData?.ctaBtnLabel}
      </Button>
    </section>
  )
}
