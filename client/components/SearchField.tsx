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
                        <Box className={`${styles.searchTabs}`}>
                            <Tabs value={value} onChange={handleChange} centered aria-label="Search Box">
                                <Tab label="Stays" {...a11yProps(0)} />
                                <Tab label="Experiences" {...a11yProps(1)} />
                                <LinkTab label="Online Experiences" href='https://www.airbnb.com/' />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <Box role="presentation">
                                <ul className={`${styles.searchText} ${styles.modalSearchBox}`}>
                                    <li className={`${styles.searchWhere} ${styles.searchItem}`}>
                                        <span>Where</span>
                                        <span className={styles.searchBoxText}>Search destinations</span>
                                    </li>
                                    <li className={`${styles.checkIn} ${styles.searchItem}`}>
                                        <span>Check in</span>
                                        <span className={styles.searchBoxText}>Add Dates</span>
                                    </li>
                                    <li className={`${styles.checkOut} ${styles.searchItem}`}>
                                        <span>Check out</span>
                                        <span className={styles.searchBoxText}>Add Dates</span>
                                    </li>
                                    <li className={`${styles.searchGuest} ${styles.searchItem}`}>
                                        <div className={`${styles.searchGuestItem}`}>
                                            <span className={styles.searchWho}>Who</span>
                                            <span className={styles.searchBoxText}>Add guests</span>
                                        </div>
                                        <Button className={`${styles.brandBtn}`}  variant="contained" startIcon={<SearchIcon />}>
                                            Send
                                        </Button>
                                    </li>
                                </ul>
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Box role="presentation">
                                <ul className={`${styles.searchText} ${styles.modalSearchBox}`}>
                                    <li className={`${styles.searchWhere} ${styles.searchItem}`}>
                                        <span>Where</span>
                                        <span className={styles.searchBoxText}>Search destinations</span>
                                    </li>
                                    <li className={`${styles.checkIn} ${styles.searchItem}`}>
                                        <span>Date</span>
                                        <span className={styles.searchBoxText}>Add When you want to go</span>
                                    </li>
                                    <li className={`${styles.searchGuest} ${styles.searchItem}`}>
                                        <div className={`${styles.searchGuestItem}`}>
                                            <span className={styles.searchWho}>Who</span>
                                            <span className={styles.searchBoxText}>Add guests</span>
                                        </div>
                                        <Button className={`${styles.brandBtn}`} variant="contained" startIcon={<SearchIcon />}>
                                            Send
                                        </Button>
                                    </li>
                                </ul>
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={2}></TabPanel>
                    </Box>                    
                </SwipeableDrawer>
            </Fragment>
        </>
    )
}

export default SearchField