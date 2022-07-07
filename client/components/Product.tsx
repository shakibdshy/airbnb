import React, { SyntheticEvent, useState } from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import { TabContext, TabPanel } from '@mui/lab';
import { Box, Container, Tab, Tabs } from '@mui/material';
import Icon from '../assets/icon.jpg';
import Image from 'next/image';
import styles from '../styles/category.module.css';

function Product() {
    const [value, setValue] = useState('1');

    const handleChange = (event: SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <>
            <Container maxWidth="xl">
                <TabContext value={value}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                        aria-label="lab API tabs example">
                        <Tab
                            icon={<Image src={Icon} width={24} height={24} alt='Category' className={styles.categoryIcon} />}
                            label="Category Item" value="1"
                        />
                        <Tab icon={<PhoneIcon />} label="Item Two" value="2" />
                        <Tab icon={<PhoneIcon />} label="Item Three" value="3" />
                    </Tabs>
                    <TabPanel value="1">Item One</TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
            </Container>
        </>
    )
}

export default Product