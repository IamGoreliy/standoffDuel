import {Box, Button, Typography} from "@mui/material";

export const PlayerRejectedDuel = ({playerData, closeMenu}) => {
    const {id, avatarOwnerRoom, ownerName: playerName, betSize, quantityPlayers, quantityPlayerInRoom} = playerData;
    return (
        <>
            <Box>
                <Typography
                    variant="h5"
                >
                    Игрок <span style={{color: 'red'}}><b>{playerName}</b></span> отказался от дуэль
                </Typography>
            </Box>
            <Button
                onClick={() => closeMenu()}
                variant="contained"
                sx={{
                    mt: '20px',
                }}
            >
                закрыть
            </Button>
        </>
    )
}