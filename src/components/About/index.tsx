import styles from './about.module.css'
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'

export default () => {
  return (
    <section className={styles.container}>
      <div className={styles.about}>
        <Typography variant='h4'>About Me</Typography>
        <Typography variant='body1'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
          reiciendis optio autem doloremque sunt molestiae, perferendis nobis
          deleniti odit magnam vel consectetur, reprehenderit soluta eum officia
          voluptas aperiam neque. Animi.
        </Typography>
        <Typography variant='body1'>
          Animi corporis voluptatem distinctio inventore. Doloremque labore
          neque repellat eius voluptates. Placeat iure odit doloremque quos
          veniam aperiam, maiores suscipit vero, harum explicabo eum recusandae,
          ipsam omnis? Odit, voluptate quis.
        </Typography>
        <Button variant='contained'>Download Resume</Button>
      </div>
      <div>
        <Typography variant='h6'>Quick Facts</Typography>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>
            Fugiat tenetur placeat culpa omnis ratione qui autem quibusdam?
          </li>
          <li>
            Aliquid sequi nobis, facilis tempore maiores quis fugit eveniet nam
            modi doloremque, non consectetur.
          </li>
          <li>Cupiditate dolore cum necessitatibus omnis ex?</li>
        </ul>
      </div>
    </section>
  )
}
