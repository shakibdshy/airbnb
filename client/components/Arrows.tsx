import { Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { VisibilityContext } from "react-horizontal-scrolling-menu";

interface Arrows {
    children: React.ReactNode;
    disabled: boolean;
    onClick: VoidFunction;
}

function Arrows({ children, disabled, onClick }: Arrows) {
    return (
        <Button
            variant="contained"
            startIcon={<DeleteIcon />}
            disabled={disabled}
            onClick={onClick}
            style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                right: "1%",
                opacity: disabled ? "0" : "1",
                userSelect: "none"
            }}
        >
            {children}
        </Button>
    )
}

export default Arrows

export const LeftArrow = () => { 
    const {
        isFirstItemVisible,
        scrollPrev,
        visibleItemsWithoutSeparators,
        initComplete
    } = useContext(VisibilityContext);

    const [disabled, setDisabled] = useState(!initComplete || (initComplete && isFirstItemVisible));

    useEffect(() => {
        if (visibleItemsWithoutSeparators.length) {
            setDisabled(isFirstItemVisible);
        }
    }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

    return (
        <Arrows disabled={disabled} onClick={() => scrollPrev()}>
            Left
        </Arrows>
    );
}

export const RightArrow = ({ limit, pushNewItems }: {limit: number, pushNewItems: CallableFunction}) => {
    const {
        isLastItemVisible,
        scrollNext,
        visibleItemsWithoutSeparators,
        items
    } = useContext(VisibilityContext);

    const [disabled, setDisabled] = useState(
        !visibleItemsWithoutSeparators.length && isLastItemVisible
    );

    useEffect(() => {
        if (isLastItemVisible) {
            pushNewItems();
        }
        if (items.toItemsWithoutSeparators().length >= limit) {
            setDisabled(isLastItemVisible);
        }
    }, [items, limit, isLastItemVisible]);

    return (
        <Arrows disabled={disabled} onClick={() => scrollNext()}>
            Right
        </Arrows>
    );
}