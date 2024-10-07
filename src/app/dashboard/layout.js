'use client';
import {Box, createTheme, ThemeProvider} from "@mui/material";
import {useEffect} from "react";
import {useRouter} from "next/navigation";

const theme = createTheme({
    typography: {
        allVariants: {
            color: 'white',
        }
    },
    components: {
        MuiTableHead: {
            styleOverrides: {
                root: {
                    borderBottom: '2px solid #191e2b', // Пример изменения бордера для `thead`
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    color: 'white',
                }
            }
        }
    }
})


const Layout = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const sessionStore = window.sessionStorage.getItem('sessionAuth') ?? null ;
        if (!sessionStore) {
            router.push("/");
        }
    }, []);

    return (
        <Box>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </Box>
    )
}

export default Layout;
