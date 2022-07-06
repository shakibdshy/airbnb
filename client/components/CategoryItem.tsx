import Image from 'next/image';
import React from 'react'
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import Icon from '../assets/icon.jpg';

interface CategoryItem {
    title: string; 
    icon: string;
    itemId: string
}

function CategoryItem({ title, icon, itemId }: CategoryItem) {
    const visibility = React.useContext(VisibilityContext);

    return (
        <>
            <div>
                <Image src={Icon} alt={title} width={24} height={24} />
            </div>
            <div>Category Title</div>
        </>
    )
}

export default CategoryItem