import {Box, Button, Typography} from "@mui/material";
import {IconSpanFromDashboard} from "@/styledComponent/StyledComponent";
import {useEffect, useState} from "react";
import {IconGoogle, IconVk2, TelegramIcon} from "@/utils/SVGcreate";
import {counterMobileSize} from "@/utils/counterMobSize";

const userProfileTemplate = {
    name: 'Дмитрий Гмырин',
    nickName: 'SOdus',
    balance: 3465,
    userId: 35880749,
};

const socialBtn = [
    {
        id: 1,
        name: 'google',
        svgComponent: (props) => <IconGoogle {...props}/>
    },
    {
        id: 2,
        name: 'telegram',
        svgComponent: (props) => <TelegramIcon {...props}/>
    },
    {
        id: 3,
        name: 'vk',
        svgComponent: (props) =>  <IconVk2 {...props}/>
    },
];

const clickBtnOperationBalance = () => {
    const btnOperationBalance = document.querySelector('#btnOperationBalance');
    btnOperationBalance.click();
}

export const ProfileUser = () => {
    const [userAvatar, setUserAvatar] = useState('image/dashboard/userProfile/placeholderUserImg.png');
    const [userData, setUserData] = useState(userProfileTemplate);
    const [systemRegistration, setSystemRegistration] = useState(null);

    useEffect(() => {
        const userSessionData = sessionStorage.getItem("sessionAuth") ?? null;
        if (userSessionData) {
            const systemUserRegis = JSON.parse(userSessionData);
            setSystemRegistration(systemUserRegis);
        }
    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                height: '206px',
                columnGap: '27px',
                borderRadius: '15px',
                padding: '26px 30px 30px 30px',
                backgroundColor: '#050914',
                border: '0.5px solid #191e2b',
            }}
        >
            <Box
                sx={{
                    // width: {"131px",
                    // height: '131px',
                }}
            >
                <img
                    src={userAvatar}
                    alt=""
                    loading="lazy"
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                />
            </Box>
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '40px',
                    width: '80%',
                    '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        width: '100%',
                        height: '0.1px',
                        top: '50%',
                        left: 0,
                        transform: 'translateY(-50%)',
                        borderTop: '0.1px solid #293546',
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box>
                        <Typography
                            variant={'h5'}
                        >
                            {userData.nickName}
                        </Typography>
                        <Typography
                            variant={'subtitle2'}
                            sx={{
                                color: '#6B7F9D',
                            }}
                        >
                            {userData.name}
                        </Typography>
                    </Box>
                    <Box
                        component={'ul'}
                        sx={{
                            listStyle: 'none',
                            padding: 0,
                            display: 'flex',
                            columnGap: '10px',
                        }}
                    >
                        {systemRegistration && socialBtn.map(ele => {
                            const {id, name, svgComponent: SvgComponent} = ele;
                            return (
                                <Box
                                    key={id}
                                    component={'li'}
                                >
                                    <SvgComponent
                                        sx={{
                                            width: {xs: '20px', md: '25px'},
                                            height: {xs: '20px', md: '25px'},
                                            fill: name === systemRegistration.nameSystem ? 'green' : 'white',
                                        }}
                                    />
                                </Box>
                            )
                        })}
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Box>
                        <Typography
                            variant={'subtitle2'}
                            sx={{
                                fontSize: {xs: counterMobileSize(23.79), md: 'auto'},
                                lineHeight: {xs: counterMobileSize(22.77), md: 'auto'},
                            }}
                        >
                            Баланс
                        </Typography>
                        <Typography
                            variant={'h5'}
                            sx={{
                                fontSize: {xs: counterMobileSize(29.74), md: 'auto'},
                                lineHeight: {xs: counterMobileSize(28.46), md: 'auto'},
                            }}
                        >
                            {userData.balance}<span style={{color: "yellow"}}>G</span>+
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant={'subtitle2'}
                            sx={{
                                fontSize: {xs: counterMobileSize(23.79), md: 'auto'},
                                lineHeight: {xs: counterMobileSize(22.77), md: 'auto'},
                            }}
                        >
                            Игровой ID
                        </Typography>
                        <Typography
                            variant={'h5'}
                            sx={{
                                fontSize: {xs: counterMobileSize(29.74), md: 'auto'},
                                lineHeight: {xs: counterMobileSize(28.46), md: 'auto'},
                            }}
                        >
                            {userData.userId}
                        </Typography>
                    </Box>

                    <Button
                        variant="contained"
                        onClick={() => clickBtnOperationBalance()}
                        sx={{
                            height: '41px',
                            background: 'linear-gradient(180deg, rgba(26,255,90,1) 1%, rgba(36,228,90,1) 25%, rgba(14,109,47,1) 75%, rgba(12,102,43,1) 100%)',
                            fontSize: {xs: counterMobileSize(26.68), md: 'auto'},
                            lineHeight: {xs: counterMobileSize(25.53), md: 'auto'},
                            minWidth: {xs: 0, md: 'unset'},
                            padding: {xs: 0, md: 'unset'},
                            width: {xs: '80px', md: 'unset'},
                        }}
                    >
                        <IconSpanFromDashboard
                            backgroundImgUrl={'image/dashboard/userProfile/iconMoney.png'}
                            sx={{
                                marginRight: '10px',
                            }}
                        />
                        Вывести баланс
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}