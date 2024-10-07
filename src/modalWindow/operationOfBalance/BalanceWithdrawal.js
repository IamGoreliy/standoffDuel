'use client';
import {Box, Grid2, Typography} from "@mui/material";
import {CustomImage} from "@/styledComponent/StyledComponent";
import {useState} from "react";
import {
    GoldWithdrawalOptionsComponent
} from "@/modalWindow/operationOfBalance/withdrawalOptionsComponent/GoldWithdrawalOptions";
import {
    UAWithdrawalOptionsComponent
} from "@/modalWindow/operationOfBalance/withdrawalOptionsComponent/UAWithdrawalOptionsComponent";
import {
    CryptoWithdrawalOptionsComponent
} from "@/modalWindow/operationOfBalance/withdrawalOptionsComponent/CryptoWithdrawalOptionsComponent";

const withdrawalOptions = [
    {
        id: 1,
        nameBtn: 'гривнами',
        optionName: 'money',
    },
    {
        id: 2,
        nameBtn: 'голдой',
        optionName: 'virtual gold',
    },
    {
        id: 3,
        nameBtn: 'крипта',
        optionName: 'crypto',
    },
]

export const BalanceWithdrawal = ({paymentSystems}) => {
    const [whatWithdrawalOptions, setWhatWithdrawalOptions] = useState('money');
    return (
        <Box>
            <Box
                component={'ul'}
                sx={{
                    listStyle: 'none',
                    padding: 0,
                    display: 'flex',
                    columnGap: '5px',
                }}
            >
                {withdrawalOptions.map(option => {
                    const {id, nameBtn, optionName} = option;
                    return (
                        <Box
                            key={id}
                            component="li"
                            onClick={() => setWhatWithdrawalOptions(optionName)}
                            sx={{
                                flexBasis: 'calc(100% / 3)',
                                display: 'flex',
                                justifyContent: 'center',
                                border: whatWithdrawalOptions === optionName ? '1px solid white' : '1px solid rgba(255, 255, 255, 0.5)',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            <Typography
                                sx={{
                                    color: whatWithdrawalOptions === optionName ? 'white' : 'rgba(255, 255, 255, 0.5)',
                                }}
                            >
                                {nameBtn}
                            </Typography>
                        </Box>
                    )
                })}
            </Box>
            <Grid2
                container
                sx={{
                    justifyContent: 'center',
                    gap: '20px'
                }}
            >
                {paymentSystems.map(ele => {
                    const {id, imgUrl, whatSystem, subSystem} = ele;
                    return (
                        <Grid2
                            key={id}
                            size={{ xs: 5, sm: 2.5, md: 2.5, lg: 2.5 }}
                            onClick={() => setWhatSystemSelected(whatSystem)}
                            sx={{
                                display: whatWithdrawalOptions === subSystem ? 'block' : 'none',
                            }}
                        >
                            <CustomImage
                                src={imgUrl}
                                alt={''}
                                width={155}
                                height={84}
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                            />
                        </Grid2>
                    )
                })}
            </Grid2>
            <Box>
                {whatWithdrawalOptions === 'virtual gold' && <GoldWithdrawalOptionsComponent />}
                {whatWithdrawalOptions === 'money' && <UAWithdrawalOptionsComponent/>}
                {whatWithdrawalOptions === 'crypto' && <CryptoWithdrawalOptionsComponent/>}
            </Box>
        </Box>
    )
}