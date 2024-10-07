'use client';
import {Box, Button, Container, Typography} from "@mui/material";
import {CustomImage} from "@/styledComponent/StyledComponent";
import {counterMobileSize} from "@/utils/counterMobSize";
import {useEffect, useState} from "react";
import moment from "moment";

const boxBonuses = [
    {
        id: 1,
        imgUrl: '/image/bonusSection/24hCase.webp',
        width: 416,
        height: 417,
    },
    {
        id: 2,
        imgUrl: '/image/bonusSection/tgCase.webp',
        width: 415,
        height: 365,
    },
    {
        id: 3,
        imgUrl: '/image/bonusSection/vkCase.webp',
        width: 340,
        height: 364,
    },
];



const timer = (state, setState) => {
    setTimeout(() => {
        if (state > 0) {
            setState(state - 1000);
        } else {
            setState(86399000);
        }
    }, 1000);
}

export const BonusSection = props => {
    const [twentyFourHours, setTwentyFourHours] = useState(86399000);
    useEffect(() => {
        timer(twentyFourHours, setTwentyFourHours);
    }, [twentyFourHours]);

    return (
        <Box
            sx={{
                padding: '50px 0px',
                mt: '90px',
                // borderRadius: '10px',
                // background: 'linear-gradient(150deg, rgba(1,83,161,1) 0%, rgba(14,13,14,1) 40%, rgba(38,11,13,1) 60%, rgba(188,2,6,1) 100%)',

            }}
        >
            <Container maxWidth="xl"
                sx={{
                    maxWidth: '1580px'
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: 'center',
                        color: 'white',
                    }}
                >
                    Бонусы
                </Typography>
                <Box
                    component={'ul'}
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: {xs: 'center', md: 'space-evenly'},
                        listStyle: 'none',
                        rowGap: '60px',
                        columnGap: '25px',
                        borderRadius: '10px',
                        background: 'linear-gradient(150deg, rgba(1,83,161,1) 0%, rgba(14,13,14,1) 40%, rgba(38,11,13,1) 60%, rgba(188,2,6,1) 100%)',
                        padding: '50px 0px',

                    }}
                >
                    {boxBonuses.map((bonus, index) => {
                        const { id, imgUrl, width, height} = bonus;
                        return (
                            <Box
                                key={id}
                                component="li"
                                sx={{
                                    position: 'relative',
                                    flexBasis: {xs: id === 1 ? '100%' : '50% - 30px', md: 'unset'} ,
                                    textAlign: 'center',
                                    height: '240px',
                                }}
                            >
                                <CustomImage
                                    src={imgUrl}
                                    alt={''}
                                    width={width}
                                    height={height}
                                    sx={{
                                        width: counterMobileSize(width),
                                        height: counterMobileSize(height),
                                        display: 'block',
                                        marginRight: 'auto',
                                        marginLeft: 'auto',
                                    }}
                                />
                                <Button
                                    variant={'contained'}
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        borderRadius: '12px',
                                        background: 'linear-gradient(180deg, rgba(0,148,255,1) 0%, rgba(26,65,140,1) 100%)',
                                    }}

                                >
                                    {id === 1 ? moment.utc(twentyFourHours).format('HH:mm:ss') : 'открыть'}
                                </Button>
                            </Box>
                        )
                    })}
                </Box>
            </Container>
        </Box>
    )
}