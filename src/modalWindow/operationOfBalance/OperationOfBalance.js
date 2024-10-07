'use client';
import {Box, Button, Container, Typography} from "@mui/material";
import {IconCloseModal} from "@/utils/SVGcreate";
import {useState} from "react";
import {ReplenishmentOfBalance} from "@/modalWindow/operationOfBalance/ReplenishmentOfBalance";
import {BalanceWithdrawal} from "@/modalWindow/operationOfBalance/BalanceWithdrawal";

const operationButtons = [
    {
        id: 1,
        nameBtn: 'пополнение баланса',
    },
    {
        id: 2,
        nameBtn: 'вывод баланса',
    },
];

const paymentSystems = [
    {
        id: 1,
        imgUrl: '/image/modalReplenishmentOfBalance/paymentSystems/sberbank.png',
        whatSystem: 'sberbank',
        subSystem: 'money',
    },
    {
        id: 2,
        imgUrl: '/image/modalReplenishmentOfBalance/paymentSystems/tinkoff.png',
        whatSystem: 'tinkoff',
        subSystem: 'money',
    },
    {
        id: 3,
        imgUrl: '/image/modalReplenishmentOfBalance/paymentSystems/ymoney.png',
        whatSystem: 'ymoney',
        subSystem: 'money',
    },
    {
        id: 4,
        imgUrl: '/image/modalReplenishmentOfBalance/paymentSystems/kiwi.png',
        whatSystem: 'kiwi',
        subSystem: 'money',
    },
    {
        id: 5,
        imgUrl: '/image/modalReplenishmentOfBalance/paymentSystems/numPhone.png',
        whatSystem: 'numPhone',
        subSystem: 'phone',
    },
    {
        id: 6,
        imgUrl: '/image/modalReplenishmentOfBalance/paymentSystems/bitcoin.png',
        whatSystem: 'bitcoin',
        subSystem: 'crypto',
    },
    {
        id: 7,
        imgUrl: '/image/modalReplenishmentOfBalance/paymentSystems/ethereum.png',
        whatSystem: 'ethereum',
        subSystem: 'crypto',
    },
    {
        id: 8,
        imgUrl: '/image/modalReplenishmentOfBalance/paymentSystems/tether.png',
        whatSystem: 'tether',
        subSystem: 'crypto',
    },
];



export const OperationOfBalance = ({controlModal}) => {
    const [modalAnimation, setModalAnimation] = controlModal;
    const [whatOperationNow, setWhatOperationNow] = useState(1);
    return (
        <Box
            sx={{
                position: 'absolute',
                // top: {xs: '50px', md: '70px'},
                left: '50%',
                transform: 'translateX(-50%)',
                width: {xs: '97%', md: '700px'},
                padding: '20px 0px',
                background: 'linear-gradient(150deg, rgba(1,83,161,1) 0%, rgba(14,13,14,1) 40%, rgba(38,11,13,1) 60%, rgba(188,2,6,1) 100%)',
                zIndex: 3,
                border: '1px solid white',
                borderRadius: '20px',

            }}
        >
            <Container
                maxWidth="xl"
            >
                <Button
                    onClick={() => setModalAnimation(false)}
                    sx={{
                        '&:hover > svg': {
                            fill: 'red',
                        },
                    }}
                >
                    <IconCloseModal
                        sx={{
                            width: '40px',
                            height: '40px',
                            fill: 'white',

                        }}
                    />
                </Button>
                <Box>
                    <Box
                        component={'ul'}
                        sx={{
                            listStyle: 'none',
                            padding: 0,
                            display: 'flex',
                            mb: 0,
                            ml: '15px',
                            columnGap: '1px',
                        }}
                    >
                        {operationButtons.map(ele => {
                            const {id, nameBtn} = ele;
                            return (
                                <Box
                                    key={id}
                                    component={'li'}
                                    onClick={() => setWhatOperationNow(id)}
                                    sx={{
                                        border: id === whatOperationNow ? '1px solid white' : '1px solid #7a7a7a',
                                        borderRadius: '5px 5px 0px 0px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: id === whatOperationNow ? 'white' : '#7a7a7a',
                                            padding: '3px 6px',
                                            fontFamily: 'Gotham Pro',
                                            fontSize: '18px',
                                            fontWeight: '400',
                                            lineHeight: '17.23px',
                                            // textAlign: left;

                                        }}
                                    >
                                        {nameBtn}
                                    </Typography>
                                </Box>
                            )
                        })}
                    </Box>
                    <Box
                        sx={{
                            padding: '20px 0px',
                            width: '100%',
                            border: '1px solid white',
                            borderRadius: '10px',
                        }}
                    >
                        {whatOperationNow === 1 ? <ReplenishmentOfBalance paymentSystems={paymentSystems}/> : <BalanceWithdrawal paymentSystems={paymentSystems}/>}
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
