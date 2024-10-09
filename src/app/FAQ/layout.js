'use client';
import {Box, createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    typography: {
        allVariants: {
            color: 'white',
        }
    }
})

const Layout = ({ children }) => {
    return (
        <Box
            sx={{
                padding: '50px 0px',
                backgroundColor: '#060c1b',
            }}
        >
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </Box>
    )
}

export default Layout;