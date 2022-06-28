import { Box, IconButton, SwipeableDrawer } from '@mui/material'
import React, { Fragment, KeyboardEvent, MouseEvent, useState } from 'react'
import styles from '../styles/Search.module.css'
import SearchIcon from '@mui/icons-material/Search';

type Anchor = 'top';

function SearchField() {
    const [drawer, setDrawer] = useState({ top: false });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: KeyboardEvent | MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setDrawer({ ...drawer, [anchor]: open });
            };

    return (
        <>
            <Fragment>
                <ul onClick={toggleDrawer('top', true)} className={styles.searchText}>
                    <li>Anywhere</li>
                    <li>Any week</li>
                    <li>
                        Add guest
                        <IconButton className={styles.searchIcon} size="small" color="primary" component="span">
                            <SearchIcon />
                        </IconButton>
                    </li>
                </ul>
                <SwipeableDrawer
                    anchor="top"
                    open={drawer.top}
                    onClose={toggleDrawer('top', false)}
                    onOpen={toggleDrawer('top', true)}
                >
                    <Box
                        role="presentation"
                        onClick={toggleDrawer('top', false)}
                        onKeyDown={toggleDrawer('top', false)}
                    >
                        <ul className={styles.searchText}>
                            <li>Where</li>
                            <li>Check in</li>
                            <li>Check out</li>
                            <li>
                                Who
                                <IconButton className={styles.searchIcon} size="small" color="primary" component="span">
                                    <SearchIcon />
                                </IconButton>
                            </li>
                        </ul>
                    </Box>
                </SwipeableDrawer>
            </Fragment>
        </>
    )
}

export default SearchField