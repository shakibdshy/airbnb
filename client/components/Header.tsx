import { Grid, IconButton, Skeleton, Typography } from '@mui/material'
import { Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import logo from '../assets/airbnb-logo.svg'
import useLoading from '../hooks/useLoading'
import styles from '../styles/Header.module.css'
import SearchField from './SearchField'
import LanguageIcon from '@mui/icons-material/Language';
import { Language } from '@mui/icons-material'

function Header() {
    const [loading] = useLoading()

    return (
        <header className={styles.headerArea}>
            <Container maxWidth="xl">
                <Grid className={styles.height} container spacing={3} alignItems="center" justifyContent="space-between">
                    <Grid item md={1} xl={2}>
                        <div className={styles.logo}>
                            {
                                loading ? <Skeleton animation="wave" width={100} height={60} /> : <Image src={logo} width={105} height={50} alt="airbnb" />
                            }
                        </div>
                    </Grid>
                    <Grid item md={6} xl={7} justifyContent="center">
                        <SearchField />
                    </Grid>
                    <Grid item md={2}>
                        <ul className={styles.headerRight}>
                            <li className={styles.host}>Become a Host</li>
                            <li className={styles.language}>
                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '16px', width: '16px', fill: 'currentcolor' }} aria-hidden="true" role="presentation" focusable="false"><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path></svg>
                            </li>
                            <li className={styles.profile}>
                                <div className={styles.hamburgerIcon}>
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: '3px', overflow: 'visible' }} aria-hidden="true" role="presentation" focusable="false"><g fill="none" fillRule="nonzero"><path d="m2 16h28"></path><path d="m2 24h28"></path><path d="m2 8h28"></path></g></svg>
                                </div>
                                <div className={styles.userIcon}>
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentcolor', }} aria-hidden="true" role="presentation" focusable="false"><path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path></svg>
                                </div>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>
        </header>
    )
}

export default Header