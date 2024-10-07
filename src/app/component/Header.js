'use client';
import {Box, Button, Container, Typography} from "@mui/material";
import {CustomLink, Logo} from "@/styledComponent/StyledComponent";
import Image from "next/image";
import {IconShowBalance, Replenish} from "@/utils/SVGcreate";
import Link from "next/link";
import {useState, useEffect} from "react";
import {AuthModal} from "@/modalWindow/authComponent/authModal";

const pageNavigation = [
    {
        id: 1,
        name: 'Главная',
        link: '/',
    },
    {
        id: 2,
        name: 'Дуэли',
        link: '/duel',
    },
    {
        id: 3,
        name: 'Поддержка',
        link: '/FAQ',
    },
];

const fnShowBalance = (walletState, setWalletState) => {
        setWalletState(!walletState);
}

export const Header = ({controlReplenishmentBalance}) => {
    const [showBalance, setShowBalance] = useState(false);
    const [walletIsOpen, setWalletIsOpen] = controlReplenishmentBalance;
    const [avatarBtnIsOpen, setAvatarBtnIsOpen] = useState(false);

    useEffect(() => {
        if (showBalance) {
            setTimeout(() => {
                setShowBalance(false);
            },10000);
        }
    }, [showBalance]);

    return (
        <Box
            sx={{
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    display: 'block',
                    padding: {xs: 'unset', md:'10px 0px'},

                }}
            >
                <Container
                    maxWidth={"xl"}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box>
                        <Logo
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Image
                                src="/image/logo.png"
                                alt={'logo'}
                                width={87}
                                height={86}
                                style={{
                                    width: '38px',
                                    height: '38px',
                                }}
                            />
                            <Typography
                                sx={{
                                    ml: '10px',
                                    fontWeight: 700,
                                    color: 'white'
                                }}
                            >
                                ДУЭЛИ
                                <Box
                                    component={'br'}
                                    sx={{
                                        display: {xs: 'block', md: 'none'},
                                    }}
                                />
                                &nbsp; SO2
                            </Typography>
                        </Logo>
                    </Box>

                    {/*🍉🍉🍉Page navigation for PC🍉🍉🍉*/}
                    <Box
                        sx={{
                            display: {xs: 'none', md: 'block'}

                        }}
                    >
                        <Box
                            component={'ul'}
                            sx={{
                                display: 'flex',
                                columnGap: '70px',
                            }}
                        >
                            {pageNavigation.map(element => {
                                const {id, name, link} = element;
                                return (
                                    <Box
                                        key={id}
                                        component="li"
                                    >
                                        <CustomLink
                                            href={link}
                                        >
                                            {name}
                                        </CustomLink>
                                    </Box>
                                )
                            })}
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Button
                            sx={{
                                minWidth: 'unset',
                            }}
                        >
                            <Image
                                src="/image/notifications.png"
                                alt={'notifications'}
                                width={46}
                                height={52}
                                style={{
                                    width: '19px',
                                    height: '21px',
                                }}
                            />
                        </Button>
                        <Box
                            sx={{
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: 'rgba(255, 255, 255, 0.11)',
                                borderRadius: '10px',
                                height: '30px',
                                padding: '3px 10px',
                                columnGap: '10px',
                                overflow: 'hidden',
                                width: 'auto'
                            }}
                        >
                            <Box
                                onClick={() => fnShowBalance(showBalance, setShowBalance)}
                                sx={{
                                    width: '24px',
                                    height: '24px',
                                }}
                            >
                                <IconShowBalance
                                    sx={{
                                        fill: 'rgba(0,255,71,1)',
                                        rotate: showBalance ? '180deg' : '0deg',
                                        transition: 'rotate, 500ms ease-in-out',
                                    }}
                                />
                            </Box>
                            <Typography
                                sx={{
                                    width:  showBalance ? '100px' : '0px',
                                    overflow: showBalance ? 'unset' :'hidden',
                                    color: '#00FF47',
                                    transition: 'width 500ms',
                                }}
                            >
                                123,456,789
                            </Typography>
                            <Button
                                id={'btnOperationBalance'}
                                onClick={() => setWalletIsOpen(true)}
                                sx={{
                                    minWidth: 'unset',
                                    minHeight: 'unset',
                                    width: '23px',
                                    height: '23px',
                                    padding: '5px',
                                    backgroundColor: '#00FF75',
                                    boxShadow: '-10px 10px 113px 18px rgba(0,255,71,1)',

                                }}
                            >
                                <Replenish
                                    sx={{
                                        width: '100%',
                                        height: '100%',

                                    }}
                                />
                            </Button>

                        </Box>
                        <Button
                            onClick={() => setAvatarBtnIsOpen(!avatarBtnIsOpen)}
                            sx={{
                                minWidth: 'unset',
                            }}
                        >
                            <Image
                                src="/image/avatar.png"
                                alt={'avatar'}
                                width={87}
                                height={86}
                                style={{
                                    width: '38px',
                                    height: '38px',
                                }}
                            />
                        </Button>
                    </Box>
                </Container>
            </Box>
            <AuthModal authModalIsOpen={avatarBtnIsOpen}/>
        </Box>
    )
}