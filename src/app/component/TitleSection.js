'use client';
import {Box, Button, Container, Typography} from "@mui/material";
import {LogoSpan} from "@/styledComponent/StyledComponent";
import {counterMobileSize} from "@/utils/counterMobSize";

const textShadowStyle = '1px -1px 0 #767676, -1px 2px 1px #737272, -2px 4px 1px #767474, -3px 6px 1px #787777, -4px 8px 1px #7b7a7a, -5px 10px 1px #7f7d7d, -6px 12px 1px #828181, -7px 14px 1px #868585, -8px 16px 1px #8b8a89, -9px 18px 1px #8f8e8d, -10px 20px 1px #949392, -11px 22px 1px #999897, -12px 24px 1px #9e9c9c, -13px 26px 1px #a3a1a1, -14px 28px 1px #a8a6a6, -15px 30px 1px #adabab, -16px 32px 1px #b2b1b0, -17px 34px 1px #b7b6b5, -18px 36px 1px #bcbbba, -19px 38px 1px #c1bfbf, -20px 40px 1px #c6c4c4, -21px 42px 1px #cbc9c8, -22px 44px 1px #cfcdcd, -23px 46px 1px #d4d2d1, -24px 48px 1px #d8d6d5, -25px 50px 1px #dbdad9, -26px 52px 1px #dfdddc, -27px 54px 1px #e2e0df, -28px 56px 1px #e4e3e2;'

export const TitleSection = () => {
    return (
        <Box>
            {/*mobile version*/}
            <Box
                sx={{
                    display: {xs: 'block', md: 'block'},
                    backgroundImage: {xs: 'url(./image/titleSection/heroTitleMobile.webp)', lg: 'url(./image/titleSection/heroTitlePC.webp)'},
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                }}
            >
                <Container
                    maxWidth="xl"
                >
                    <Box
                        sx={{
                            textAlign: 'center',
                            paddingTop: {xs: '70px', md : '110px', lg: '140px', xl: '190px'},
                            paddingBottom: {xs: '60px', md: '65px', lg: '80px', xl: '125px'},
                        }}
                    >

                        <Typography
                            variant={'h1'}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                                fontWeight: 700,
                                fontSize: counterMobileSize('135px'),
                                LineHeight: counterMobileSize('129px'),
                                color: 'white',
                            }}
                        >
                            STAND
                            <LogoSpan
                            sx={{
                                width: counterMobileSize('118px'),
                                height: counterMobileSize('118px'),
                            }}
                        />
                            FF <br/>DUELS
                        </Typography>

                        {/*🍑🍑🍑 PC title 🍑🍑🍑*/}
                        <Box
                            sx={{
                                display: {xs: 'none', md: 'block'},
                            }}
                        >
                        <Typography
                            variant={'h1'}
                            sx={{
                                fontWeight: 700,
                                fontSize: '128px',
                                LineHeight: '122.5px',
                                color: 'white',
                            }}
                        >
                            STANDOFF DUELS
                        </Typography>
                        <Typography
                            variant={'subtitle1'}
                            sx={{
                                fontWeight: 400,
                                fontSize: '37.34px',
                                LineHeight: '50.86px',
                                color: 'white',

                            }}
                        >
                            Уважаемые игроки! Открылся проект по дуэялям в Standoff 2
                        </Typography>
                        </Box>
                        <Button
                            variant={'contained'}
                            sx={{
                                width: {xs: '172px', md: '210px', ld: '268px'},
                                height: {xs: '40px', md: '50px', ld: '65px'},
                                mt: {xs: '10px', md: '60px'},
                                backgroundColor: '#35FF61',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#3df364',
                                },
                                fontWeight: 700,
                                fontSize: counterMobileSize('35.45px'),
                                LineHeight: counterMobileSize('48.28px'),
                                // textShadow: '5px 7px 5px rgba(0,0,0,1)',
                                boxShadow: 'inset 0px -14px 23px 0px rgba(0,0,0,0.75)',

                            }}
                        >
                            Начать играть!
                        </Button>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}