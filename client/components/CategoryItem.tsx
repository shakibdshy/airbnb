import Image from 'next/image';
import React from 'react'
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import Icon from '../assets/icon.jpg';
import styles from '../styles/category.module.css';

interface CategoryItem {
    title: string; 
    icon: string;
    itemId: string
}

function CategoryItem({ title, icon, itemId }: CategoryItem) {
    const visibility = React.useContext(VisibilityContext);

    return (
        <>
            <div className={styles.categoryItem}>
                <div>
                    <Image src={Icon} alt={title} width={24} height={24} className={styles.categoryIcon} />
                </div>
                <h4>Category Title</h4>
            </div>
        </>
    )
}

export default CategoryItem