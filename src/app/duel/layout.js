'use client';
import {Box, createTheme} from "@mui/material";
import {ThemeProvider} from "@mui/material";
import {createContext} from "react";

const theme = createTheme({
    typography: {
        allVariants: {
            color: 'white'
        }
    }
});

const duelRooms = [
    {
        id: 1,
        avatarOwnerRoom: '',
        ownerName: 'Sodus',
        betSize: '1000',
        quantityPlayers: 2,
        quantityPlayerInRoom: 1
    },
    {
        id: 2,
        avatarOwnerRoom: '',
        ownerName: 'Empty',
        betSize: '3556',
        quantityPlayers: 2,
        quantityPlayerInRoom: 2
    },
    {
        id: 3,
        avatarOwnerRoom: '',
        ownerName: 'ia lox ti trup',
        betSize: '300',
        quantityPlayers: 2,
        quantityPlayerInRoom: 1
    },
    {
        id: 4,
        avatarOwnerRoom: '',
        ownerName: 'ishchu devushku',
        betSize: '3460',
        quantityPlayers: 2,
        quantityPlayerInRoom: 1
    },
    {
        id: 5,
        avatarOwnerRoom: '',
        ownerName: 'w1nner',
        betSize: '1270',
        quantityPlayers: 2,
        quantityPlayerInRoom: 2
    },
    {
        id: 6,
        avatarOwnerRoom: '',
        ownerName: 'invi',
        betSize: '9785',
        quantityPlayers: 2,
        quantityPlayerInRoom: 1
    },
    {
        id: 7,
        avatarOwnerRoom: '',
        ownerName: 'invi',
        betSize: '6785',
        quantityPlayers: 2,
        quantityPlayerInRoom: 2
    },{
        id: 8,
        avatarOwnerRoom: '',
        ownerName: 'invi',
        betSize: '4785',
        quantityPlayers: 2,
        quantityPlayerInRoom: 1
    }
];

export const DuelRoomData = createContext({});

const Layout = ({ children }) => (
    <Box>
        <ThemeProvider theme={theme}>
            <DuelRoomData.Provider value={duelRooms}>
                {children}
            </DuelRoomData.Provider>
        </ThemeProvider>
    </Box>
)

export default Layout;