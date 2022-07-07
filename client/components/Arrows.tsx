import { Button, IconButton, ButtonProps } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Arrows {
    children: React.ReactNode;
    disabled: boolean;
    onClick: VoidFunction;
}

const ArrowButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    padding: 0,
    fontSize: 12,
    minWidth: 28,
    border: '0.5px solid rgb(0 0 0 / 0.3)',    
    backgroundColor: 'var(--clr-white)',
    transition: 'all 0.3s ease-in-out',
    width: 28,
    height: 28,
    lineHeight: 28,
    borderRadius: '50%',
    textAlign: 'center',
    '&:hover': {
        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.12)',
        transform: 'scale(1.04)',
        backgroundColor: 'var(--clr-white)',
    },
    '&:active': {
        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.12)',
        transform: 'scale(1.04)',
        backgroundColor: 'var(--clr-white)',
    },
    '&:focus': {
        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.12)',
    },
});

function Arrows({ children, disabled, onClick }: Arrows) {
    return (
        <ArrowButton
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
        </ArrowButton>
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
        <Arrows disabled={disabled} onClick={() => scrollPrev()}><ArrowBackIosIcon sx={{ fontSize: 16 }} /></Arrows>
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
        <Arrows disabled={disabled} onClick={() => scrollNext()}><ArrowForwardIosIcon sx={{ fontSize: 16 }} /></Arrows>
    );
}