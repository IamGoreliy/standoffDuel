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

export const duelRoomsPlayerInfo = [
    {
        id: 1,
        userId: '35880749',
        avatarOwnerRoom: '',
        ownerName: 'Sodus',
        betSize: '1000',
        quantityPlayers: 2,
        quantityPlayerInRoom: 1,
    },
    {
        id: 2,
        userId: '31710239',
        avatarOwnerRoom: '',
        ownerName: 'Empty',
        betSize: '3556',
        quantityPlayers: 2,
        quantityPlayerInRoom: 2,
    },
    {
        id: 3,
        userId: '11179103',
        avatarOwnerRoom: '',
        ownerName: 'ia lox ti trup',
        betSize: '300',
        quantityPlayers: 2,
        quantityPlayerInRoom: 1,
    },
    {
        id: 4,
        userId: '29731000',
        avatarOwnerRoom: '',
        ownerName: 'ishchu devushku',
        betSize: '3460',
        quantityPlayers: 2,
        quantityPlayerInRoom: 1,
    },
    {
        id: 5,
        userId: '10320951',
        avatarOwnerRoom: '',
        ownerName: 'w1nner',
        betSize: '1270',
        quantityPlayers: 2,
        quantityPlayerInRoom: 2,
    },
    {
        id: 6,
        userId: '31187741',
        avatarOwnerRoom: '',
        ownerName: 'R1ver',
        betSize: '9785',
        quantityPlayers: 2,
        quantityPlayerInRoom: 1,
    },
    {
        id: 7,
        userId: '11375441',
        avatarOwnerRoom: '',
        ownerName: 'boyBacks',
        betSize: '6785',
        quantityPlayers: 2,
        quantityPlayerInRoom: 2,
    },
    {
        id: 8,
        userId: '17183354',
        avatarOwnerRoom: '',
        ownerName: 'tinygirl',
        betSize: '4785',
        quantityPlayers: 2,
        quantityPlayerInRoom: 1,
    },
    {
        id: 9,
        userId: '15410001',
        avatarOwnerRoom: '',
        ownerName: 'moonlord',
        betSize: '517',
        quantityPlayers: 2,
        quantityPlayerInRoom: 2,
    },
    {
        id: 10,
        userId: '32983117',
        avatarOwnerRoom: '',
        ownerName: 'ira98',
        betSize: '785',
        quantityPlayers: 2,
        quantityPlayerInRoom: 1,
    },
    {
        id: 11,
        userId: '34654342',
        avatarOwnerRoom: '',
        ownerName: 'luna21',
        betSize: '100',
        quantityPlayers: 2,
        quantityPlayerInRoom: 1,
    },
    {
        id: 12,
        userId: '24819711',
        avatarOwnerRoom: '',
        ownerName: 'gord',
        betSize: '785',
        quantityPlayers: 2,
        quantityPlayerInRoom: 2,
    },
    {
        id: 13,
        userId: '30100739',
        avatarOwnerRoom: '',
        ownerName: 'river',
        betSize: '185',
        quantityPlayers: 2,
        quantityPlayerInRoom: 2,
    },
    {
        id: 14,
        userId: '24211416',
        avatarOwnerRoom: '',
        ownerName: 'bob',
        betSize: '7500',
        quantityPlayers: 2,
        quantityPlayerInRoom: 1,
    },
    {
        id: 15,
        userId: '13664403',
        avatarOwnerRoom: '',
        ownerName: 'lara',
        betSize: '3100',
        quantityPlayers: 2,
        quantityPlayerInRoom: 1,
    },
    {
        id: 16,
        userId: '27187043',
        avatarOwnerRoom: '',
        ownerName: 'ivan',
        betSize: '500',
        quantityPlayers: 2,
        quantityPlayerInRoom: 1,
    },
    {
        id: 17,
        userId: '26324741',
        avatarOwnerRoom: '',
        ownerName: 'zoro',
        betSize: '3185',
        quantityPlayers: 2,
        quantityPlayerInRoom: 2,
    },
    {
        id: 18,
        userId: '35910359',
        avatarOwnerRoom: '',
        ownerName: 'anry',
        betSize: '4000',
        quantityPlayers: 2,
        quantityPlayerInRoom: 1,
    },
    {
        id: 19,
        userId: '22011954',
        avatarOwnerRoom: '',
        ownerName: 'roby',
        betSize: '9000',
        quantityPlayers: 2,
        quantityPlayerInRoom: 1,
    },
    {
        id: 20,
        userId: '24882444',
        avatarOwnerRoom: '',
        ownerName: 'allW1n',
        betSize: '2000',
        quantityPlayers: 2,
        quantityPlayerInRoom: 1,
    },

];

export const DuelRoomData = createContext({});

const Layout = ({ children }) => (
    <Box>
        <ThemeProvider theme={theme}>
            <DuelRoomData.Provider value={duelRoomsPlayerInfo}>
                {children}
            </DuelRoomData.Provider>
        </ThemeProvider>
    </Box>
)

export default Layout;