import styles from './hero.module.css'
import { Avatar, Button, Typography } from '@mui/material'

export default () => {
  return (
    <section className={styles.container}>
      <Avatar sx={{ height: '25vw', width: '25vw' }} />
      <Typography className={styles.hero_name} variant='h1'>
        Cynthia Spence
      </Typography>
      <Typography className={styles.hero_title} variant='h3'>
        Full Stack Software Engineer
      </Typography>
      <Typography className={styles.hero_tagline} variant='h4'>
        Data-focused. Backend-leaning.
        <br />
        Startup-ready.
      </Typography>
      <Button
        variant='contained'
        sx={{
          bgcolor: '#2f7b7c',
          color: '#181a1b',
          fontSize: 24,
          fontWeight: 'bold',
          padding: '10px 28px',
        }}
      >
        Let's Connect!
      </Button>
    </section>
  )
}
