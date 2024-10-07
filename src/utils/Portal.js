'use client';
import {createPortal} from "react-dom";
import {useEffect, useRef} from "react";

export const Portal = (props) => {
    const {children, walletIsOpen, modalAnimation} = props;
    const refBody = useRef(document.body);
    useEffect(() => {
        if (walletIsOpen) {
            refBody.current.style.overflowY = "hidden";
        }
        if (!modalAnimation) {
            refBody.current.style.overflowY = "auto";
        }
    }, [walletIsOpen, modalAnimation]);

    return createPortal(children, refBody.current);
}