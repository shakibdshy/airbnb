import { Grid, IconButton, Skeleton, Typography } from '@mui/material'
import { Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import logo from '../assets/airbnb-logo.svg'
import useLoading from '../hooks/useLoading'
import styles from '../styles/Header.module.css'
import SearchField from './SearchField'

function Header() {
    const [loading] = useLoading()

    return (
        <header className={styles.headerArea}>
            <Container maxWidth="xl">
                <Grid className={styles.height} container spacing={3} alignItems="center" justifyContent="space-between">
                    <Grid item md={1}>
                        <div className={styles.logo}>
                            {
                                loading ? <Skeleton animation="wave" width={100} height={60} /> : <Image src={logo} width={105} height={50} alt="airbnb" />
                        }

                        </div>
                    </Grid>
                    <Grid item md={6} xl={6} justifyContent="center">
                        <SearchField />
                    </Grid>
                    <Grid item md={2}>
                        <div>Profile</div>
                    </Grid>
                </Grid>
            </Container>
        </header>
    )
}

export default Header