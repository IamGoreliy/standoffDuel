'use client';
import {Box, Typography} from "@mui/material";
import {CustomImage, CustomLink, IconSpan, LogoColorSpan} from "@/styledComponent/StyledComponent";
import {DiscordIcon, TelegramIcon, VKIcon} from "@/utils/SVGcreate";
import Link from "next/link";

const socialIcon = [
    {
        id: 1,
        Icon:
            <VKIcon
                sx={{
                    fill: '#7b8da3',
                    width: '40px',
                    height: '40px',
                    '&:hover': {
                        fill: 'white'
                    },
                }}
            />,
        link: '',
    },
    {
        id: 2,
        Icon:
            <DiscordIcon
                sx={{
                    fill: '#7b8da3',
                    width: '40px',
                    height: '40px',
                    '&:hover': {
                        fill: 'white'
                    },
                }}
            />,
        link: '',
    },
    {
        id: 3,
        Icon:
            <TelegramIcon
                sx={{
                    fill: '#7b8da3',
                    width: '40px',
                    height: '40px',
                    '&:hover': {
                        fill: 'white'
                    },
                }}
            />,
        link: '',
    },
];

export const Footer = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                backgroundImage: {xs: 'unset', md: 'url(image/footer/footerBackground.png)'},
                backgroundSize: {xs: 'unset', md: '120%', lg: 'cover'},
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: {xs: 'unset', md: '290px', lg: '400px'},
            }}
        >
            <Box
                sx={{
                    display: {xs: 'block', md: 'unset'},
                    position: 'relative',
                    width: '100%',
                    height: '400px',
                    background: 'radial-gradient(circle at 100% 100%, rgba(250,8,9,0.7) 0%, rgba(0,0,0,0.5) 45%), ' +
                        'radial-gradient(circle at 55% 90%, rgba(250,8,9,0.6) 1%, rgba(0,0,0,0.1) 4%),' +
                        'radial-gradient(circle at 55% 55%, rgba(250,8,9,1) 0%, rgba(0,0,0,0.1) 3%),' +
                        'radial-gradient(circle at 65% 63%, rgba(250,8,9,1) 0%, rgba(0,0,0,0.1) 3%),' +
                        'radial-gradient(circle at 74% 80%, rgba(250,8,9,1) 0%, rgba(0,0,0,0.1) 6%),' +
                        'radial-gradient(circle at 10% 100%, rgba(0,148,255,1) 0%, rgba(0,0,0,0.5) 90%),' +
                        'radial-gradient(circle at 40% 95%, rgba(148,222,251,1) 4%, rgba(0,0,0,0.1) 3%),' +
                        'radial-gradient(circle at 53% 70%, rgba(255,228,255,1) 1%, rgba(0,0,0,0.1) 3%),' +
                        'radial-gradient(circle at 30% 78%, rgba(255,228,255,1) 3%, rgba(0,0,0,0.1) 1%),' +
                        'radial-gradient(circle at 40% 55%, rgba(255,228,255,1) 2%, rgba(0,0,0,0.1) 3%)'
                    ,
                }}
            >
                <CustomImage
                    src={'/image/footer/blueKnife.png'}
                    alt={''}
                    width={1080}
                    height={655}
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 0,
                    }}
                />

                <CustomImage
                    src={'/image/footer/redKnife.png'}
                    alt={''}
                    width={750}
                    height={722}
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 0,
                    }}
                />
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    top: '40%',
                    left: '50%',
                    transform: 'translate(-50%, -40%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%'
                }}
            >
                <Typography
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontWeight: 700,
                        fontSize: '2rem',
                        color: 'white',
                    }}
                >
                    <LogoColorSpan
                        sx={{
                            marginRight: '10px'
                        }}
                    />
                    ДУЭЛИ STANDOFF 2
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        columnGap: '30px',
                        mt: '20px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            columnGap: '10px'
                        }}
                    >
                        <IconSpan
                            backgroundImgUrl={'/image/footer/peopleGroup.png'}
                        />
                        <Box>
                            <Typography
                                variant={'subtitle1'}
                                sx={{
                                    color: 'white',
                                    lineHeight: 1.19,
                                    fontWeight: 600

                                }}
                            >
                                54346
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white',
                                    fontSize: '10px'
                                }}
                            >
                                пользователей
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            columnGap: '10px'
                        }}
                    >
                        <IconSpan
                            backgroundImgUrl={'/image/footer/crossedSwords.png'}
                        />
                        <Box>
                            <Typography
                                variant={'subtitle1'}
                                sx={{
                                    color: 'white',
                                    lineHeight: 1.19,
                                    fontWeight: 600
                                }}
                            >
                                75427
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white',
                                    fontSize: '10px',
                                }}
                            >
                                Сыграно дуэлей
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box
                    component={'ul'}
                    sx={{
                        mt: '20px',
                        listStyle: 'none',
                        padding: 0,
                        display: 'flex',
                        columnGap: '20px',
                    }}
                >
                    {socialIcon.map(ele => {
                        const {id, Icon, link} = ele;
                        return (
                            <Box
                                key={id}
                                component={'li'}
                            >
                                <Link
                                    href={'/'}
                                >
                                    {Icon}
                                </Link>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </Box>
    )
}