import { Container } from '@mui/material';
import React, { ContextType, useState, WheelEvent } from 'react'
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from './Arrows';
import CategoryItem from './CategoryItem';

type scrollVisibilityApiType = ContextType<typeof VisibilityContext>;

const elemPrefix = "airbnb";
const getId = (index: number) => `${elemPrefix}${index}`;

const getItems = () => Array(15).fill(0).map((_, ind) => ({ id: getId(ind) }));

function Category() {
    const [items, setItems] = useState(getItems);
    const newItemsLimit = 24;

    // NOTE: for add items
    const pushNewItems = () => {
        if (items.length > newItemsLimit) {
            return false;
        }
        const newItems = items.concat(
            Array(5).fill(0).map((_, ind) => ({ id: getId(items.length + ind) }))
        );
        console.log("push new items");
        setItems(newItems);
    };

    return (
        <>
            <section>
                <Container maxWidth='xl'>
                    <ScrollMenu
                        LeftArrow={LeftArrow}
                        RightArrow={
                            <RightArrow limit={newItemsLimit} pushNewItems={pushNewItems} />
                        }
                        onWheel={onWheel}
                    >
                        {items.map(({ id }) => (
                            <CategoryItem
                                title={id}
                                icon={id}
                                itemId={id} // NOTE: itemId is required for track items
                                key={id}
                            />
                        ))}
                    </ScrollMenu>
                </Container>
            </section>
        </>
    )
}

export default Category

function onWheel(apiObj: scrollVisibilityApiType, ev: WheelEvent): void {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
        ev.stopPropagation();
        return;
    }

    if (ev.deltaY < 0) {
        apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
        apiObj.scrollPrev();
    }
}