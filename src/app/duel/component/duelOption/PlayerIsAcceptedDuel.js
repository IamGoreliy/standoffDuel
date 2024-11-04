import {Box, Button, Typography} from "@mui/material";
import {useRouter} from "next/navigation";



export const PlayerIsAcceptedDuel = ({dataPlayer, resultRequestedDuel, openReport}) => {
    const {id, userId, avatarOwnerRoom, ownerName: userName, betSize, quantityPlayers, quantityPlayerInRoom} = dataPlayer;
    const router = useRouter();
    return (
        <Box
            sx={{
                position: 'absolute',
                top: '50vh',
                left: '50vw',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#060C1B',
                width: '500px',
                height: '400px',
                padding: '10px',
                zIndex: 7,
                border: '1px solid white',
                borderRadius: '5px',
                textAlign: 'center',

            }}
        >
            <Box
                sx={{
                    textAlign: 'center',
                }}
            >
                {resultRequestedDuel === 'accepted'
                    ? <Typography variant={'h2'}>Игрок <span style={{color: 'green'}} ><b>{userName}</b></span> принял</Typography>
                    : <Typography variant={'h2'}>Игрок <span style={{color: 'red'}}><b>{userName}</b></span> отказался</Typography>
                }
            </Box>
            <Button
                onClick={() => resultRequestedDuel === 'accepted' ? router.push(`/duel/${id}`) : openReport()}
                variant="contained"
                sx={{
                    mt: '50px',
                    width: '80%',
                    height: '70px',
                    background: 'linear-gradient(180deg, rgba(19,224,64,1) 0%, rgba(20,117,47,1) 100%)',
                }}
            >
                хорошо
            </Button>
        </Box>
    )
}