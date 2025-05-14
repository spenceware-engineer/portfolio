'use client'

import styles from './page.module.css'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Education from '../components/Education'
export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Experience />
      <Education />
    </main>
  )
}
