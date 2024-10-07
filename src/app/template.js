'use client';
import {Header} from "@/app/component/Header";
import {Footer} from "@/app/component/Footer";
import {OperationOfBalance} from "@/modalWindow/operationOfBalance/OperationOfBalance";
import {useEffect, useState} from "react";
import dynamic from "next/dynamic";
import {Box} from "@mui/material";



const ModalWindowNoSSR = dynamic(() => import('@/utils/Portal').then(mod => mod.Portal), {ssr: false});


const Template = ({children}) => {
    const [walletIsOpen, setWalletIsOpen] = useState(false);
    const [modalAnimation, setModalAnimation] = useState(false);

    useEffect(() => {
        if (walletIsOpen) {
            setTimeout(() => {
                setModalAnimation(true);
            }, 500);
        }
    }, [walletIsOpen]);

    useEffect(() => {
        if (!modalAnimation) {
            setTimeout(() => {
                setWalletIsOpen(false);
            }, 1000);
        }
    }, [modalAnimation]);

    return (
        <>
            <Header controlReplenishmentBalance={[walletIsOpen, setWalletIsOpen]}/>
            {
                walletIsOpen && (
                    <ModalWindowNoSSR walletIsOpen={walletIsOpen} modalAnimation={modalAnimation}>
                        <Box
                            sx={{
                                position: 'absolute',
                                top: {xs: '50px', md: '70px'},
                                left: {xs: 0, md: '50%'},
                                transform: {xs: 'unset', md: 'translateX(-50%)'},
                                width: {xs: '99%', md: '700px'},

                            }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '-1000px',
                                    left: 0,
                                    width: '100%',
                                    height: '900px',
                                    transform: modalAnimation ? 'translateY(1000px)' : '',
                                    transition:'transform 500ms linear 500ms',
                                    overflowY: 'auto',
                                }}
                            >
                                <OperationOfBalance controlModal={[modalAnimation, setModalAnimation]} />
                            </Box>
                        </Box>
                    </ModalWindowNoSSR>
                )
            }
                {children}
            <Footer/>
        </>
    )
}

export default Template;