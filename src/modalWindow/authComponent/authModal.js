import {Box, Container} from "@mui/material";
import {Login} from "@/modalWindow/authComponent/Login";
import {Logout} from "@/modalWindow/authComponent/Logout";
import {useEffect, useLayoutEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";

const btnAuth = [
    {
        id: 1,
        name: 'google',
        logoUrl: '/image/modalAuthIcon/googleLogo.png',
        color: 'white',
        link: '',
    },
    {
        id: 2,
        name: 'telegram',
        logoUrl: '/image/modalAuthIcon/telegramLogo.png',
        color: 'radial-gradient(270% 5197.73% at 70.11% -60.77%, #35BAFD 0%, #017DBC 100%)',
        link: '',
    },
    {
        id: 3,
        name: 'vk',
        logoUrl: '/image/modalAuthIcon/vkLogo.png',
        color: '#0477FF',
        link: '',

    },
];

const btnLogout = [
    {
        id: 1,
        btnName: 'личный кабинет',
        link: '',
    },
    {
        id: 2,
        btnName: 'выйти',
        link: '',
    },
];

export const AuthModal = ({authModalIsOpen}) => {
    const [authUser, setAuthUser] = useState(false);
    const pathCurrPage = usePathname();
    const router = useRouter();

    // console.log(authUser)

    useEffect(() => {
        const sessionAuthData = sessionStorage.getItem("sessionAuth") ?? false;
        if (sessionAuthData) {
            setAuthUser(true);
        }
    }, []);

    const toggleAuthUser = (name) => {
        if (!authUser) {
            setAuthUser(true);
            sessionStorage.setItem("sessionAuth", JSON.stringify({auth: true, nameSystem: name}));
        } else {
            setAuthUser(false);
            sessionStorage.removeItem("sessionAuth");
            router.push('/');
        }
    }

    return (
        <Box
            sx={{
                position: 'absolute',
                top: {xs: '50px', md: '75px'},
                right: {xs: '-210px', md: '-210px'},
                width: '200px',
                height: '220px',
                background: 'linear-gradient(150deg, rgba(1,83,161,1) 0%, rgba(14,13,14,1) 40%, rgba(38,11,13,1) 60%, rgba(188,2,6,1) 100%)',
                borderRadius: '10px',
                border: '1px solid white',
                zIndex: 5,
                scale: authModalIsOpen ? 1 : 0,
                transform: {xs: authModalIsOpen && 'translateX(-230px)', md: authModalIsOpen && 'translateX(-230px)'},
                transition: 'transform 500ms linear, scale 500ms linear',
            }}
        >
            <Container
                maxWidth={'sm'}
            >
                { !authUser
                    ? <Login
                        btnAuth={btnAuth}
                        toggleAuthUser={toggleAuthUser}
                    />
                    : <Logout
                        btnLogout={btnLogout}
                        toggleAuthUser={toggleAuthUser}
                    />
                }

            </Container>
        </Box>
    )
}