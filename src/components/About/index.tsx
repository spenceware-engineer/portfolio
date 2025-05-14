import styles from './about.module.css'
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import {
  MdMilitaryTech,
  MdOutlinePets,
  MdOutlineSchema,
  MdPsychology,
} from 'react-icons/md'
import { FaGraduationCap } from 'react-icons/fa'

export default () => {
  return (
    <section className={styles.container}>
      <div className={styles.about}>
        <Typography variant='h4' sx={{ margin: '10px 0' }}>
          About Me
        </Typography>
        <Typography variant='body1' sx={{ margin: '10px 0' }}>
          Hi! I'm Cynthia Spence (call me Cyndi) — I'm a Full Stack Software
          Engineer with a backend focus and a growing specialization in data.
          I've spent over four years building web applications, microservices,
          and data transformation pipelines across industries like healthcare,
          education, and legal tech. While I'm comfortable anywhere in the
          stack, I'm most energized when solving complex data problems and
          making messy information meaningful.
        </Typography>
        <Typography variant='body1' sx={{ margin: '10px 0' }}>
          My path to tech wasn't traditional. After discovering programming in
          high school, I joined the U.S. Marine Corps, earned multiple associate
          degrees in Computer Science, Engineering, Physics, and Mathematics,
          and later graduated from App Academy's Full Stack Bootcamp. I've worn
          many hats: developer, product owner, team lead, and mentor — and I've
          built software as a freelancer, startup contributor, and full-time
          engineer.
        </Typography>
        <Typography variant='body1' sx={{ margin: '10px 0' }}>
          I realized I wanted to become a Data Engineer while leading backend
          development at AAK Tele-Science. Since then, every experience — from
          optimizing pipelines at Olive AI to querying multi-source data at
          World 50 — has deepened my passion for working with data. I love
          building systems that gather, clean, transform, and deliver data
          that's accurate and actionable.
        </Typography>
        <Typography variant='body1' sx={{ margin: '10px 0' }}>
          Outside of tech, I'm a USMC veteran, DIY enthusiast, dog mom, and
          curious problem-solver who finds joy in both a good challenge and a
          good team. I value integrity, inclusion, kindness, and learning — and
          I'm always eager to grow with and contribute to teams that feel the
          same.
        </Typography>
        <Typography variant='body1' sx={{ margin: '10px 0' }}>
          Whether I'm contributing as a Software Engineer or growing into a Data
          Engineering role, I bring heart, grit, and a desire to make systems
          better — for the people using them and the people building them.
        </Typography>
        <Button
          href='Cynthia_Spence_Resume.pdf'
          download='Cynthia_Spence_SWE_Resume.pdf'
          variant='contained'
          sx={{ margin: '10px 0' }}
        >
          Download Resume
        </Button>
      </div>
      <div>
        <Typography variant='h6'>Quick Facts</Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <MdOutlineSchema
                style={{ height: '35px', width: '35px', color: '#2f7b7c' }}
              />
            </ListItemIcon>
            <ListItemText>
              I love clean architecture, clean data, and a good debugging
              challenge
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MdMilitaryTech
                style={{ height: '35px', width: '35px', color: '#2f7b7c' }}
              />
            </ListItemIcon>
            <ListItemText>USMC Veteran — Legal Services</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FaGraduationCap
                style={{ height: '35px', width: '35px', color: '#2f7b7c' }}
              />
            </ListItemIcon>
            <ListItemText>4x Associate Degrees + App Academy Grad</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MdPsychology
                style={{ height: '35px', width: '35px', color: '#2f7b7c' }}
              />
            </ListItemIcon>
            <ListItemText>Forever curious and always learning</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MdOutlinePets
                style={{ height: '35px', width: '35px', color: '#2f7b7c' }}
              />
            </ListItemIcon>
            <ListItemText>Dog mom to Mason, Buddy, and Lily</ListItemText>
          </ListItem>
        </List>
      </div>
    </section>
  )
}
