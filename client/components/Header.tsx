import { Grid } from '@mui/material'
import { Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import logo from '../assets/airbnb-logo.svg'
import styles from '../styles/Header.module.css'

function Header() {
  return (
    <header className={styles.headerArea}>
      <Container maxWidth="xl">
        <Grid className={styles.height} container spacing={3} alignItems="center" justifyContent="space-between">
          <Grid md={1}>
            <div>
              <Image src={logo} width={105} height={50} alt="airbnb" />
            </div>
          </Grid>
          <Grid md={6} xl={6}>
            <div>Input</div>
          </Grid>
          <Grid md={2}>
            <div>Profile</div>
          </Grid>
        </Grid>
      </Container>
    </header>
  )
}

export default Header