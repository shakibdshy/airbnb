import { Box, Button, IconButton, SwipeableDrawer, Tab, Tabs, Typography } from '@mui/material'
import React, { Fragment, KeyboardEvent, MouseEvent, SyntheticEvent, useState } from 'react'
import styles from '../styles/Search.module.css'
import SearchIcon from '@mui/icons-material/Search';

type Anchor = 'top';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

interface LinkTabProps {
    label?: string;
    href?: string;
    target?: string;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function LinkTab(props: LinkTabProps) {
    return (
        <Tab
            component="a"
            {...props}
        />
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function SearchField() {
    const [drawer, setDrawer] = useState({ top: false });
    const [value, setValue] = React.useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

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
                <ul onClick={toggleDrawer('top', true)} className={`${styles.searchText} ${drawer.top ? styles.searchActive : ''}`}>
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
                    className='searchDrawer'
                >
                    <Box sx={{ width: '100%' }} className={`${drawer.top ? styles.searchModalActive : styles.searchModal}`}>
                        <Box>
                            <Tabs value={value} onChange={handleChange} centered textColor='secondary' indicatorColor='secondary' aria-label="Search Box">
                                <Tab label="Stays" {...a11yProps(0)} />
                                <Tab label="Experiences" {...a11yProps(1)} />
                                <LinkTab label="Online Experiences" href='https://www.airbnb.com/' target="_blank" />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <Box
                                role="presentation"
                            >
                                <ul className={`${styles.searchText} ${styles.modalSearchBox}`}>
                                    <li className={`${styles.searchWhere}`}>
                                        <span>Where</span>
                                        <span>Search destinations</span>
                                    </li>
                                    <li className={`${styles.checkIn}`}>
                                        <span>Check in</span>
                                        <span>Add Dates</span>
                                    </li>
                                    <li className={`${styles.checkOut}`}>
                                        <span>Check out</span>
                                        <span>Add Dates</span>
                                    </li>
                                    <li className={`${styles.searchGuest}`}>
                                        <div>
                                            <span>Who</span>
                                            <span>Add guests</span>
                                        </div>
                                        <Button variant="contained" startIcon={<SearchIcon />}>
                                            Send
                                        </Button>
                                    </li>
                                </ul>
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Item Two
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Item Three
                        </TabPanel>
                    </Box>                    
                </SwipeableDrawer>
            </Fragment>
        </>
    )
}

export default SearchField