import { createTheme, ThemeProvider } from '@mui/material';
import Head from 'next/head'
import React, { PropsWithChildren } from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }: PropsWithChildren<{}>) {
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1760,
            },
        },
    });

    return (
        <>
            <Head>
                <title>Vacation Homes & Condo Rents - airbnb</title>
                <meta name="description" content="Find the best vacation homes and condo rentals in the world. We have more than 1.5 million vacation homes and condos to choose from." />
                <meta name="keywords" content="vacation homes, condo rentals, airbnb" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" href="/airbnb-icon.svg" />
            </Head>
            <ThemeProvider theme={theme}>
                <Header />
                <main>
                    {children}
                </main>
            </ThemeProvider>
      </>
  )
}
