import {Box, Button, Typography} from "@mui/material";
import {useRouter} from "next/navigation";

export const PlayerAcceptedDuel = ({playerData}) => {
    const {id, avatarOwnerRoom, ownerName: playerName, betSize, quantityPlayers, quantityPlayerInRoom} = playerData;
    const router = useRouter();

    const handlerSendIdPlayer = () => {
        router.push(`/duel/${id}`);
    }

    return (
        <>
            <Box>
                <Typography
                    variant="h5"
                >
                    Игрок <span style={{color: 'green'}}><b>{playerName}</b></span> согласился на дуэль
                </Typography>
            </Box>
            <Button
                onClick={handlerSendIdPlayer}
                variant="contained"
                sx={{
                    mt: '20px',
                }}
            >
                перейти к дуэли
            </Button>
        </>
    )
}