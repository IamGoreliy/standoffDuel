import {Box} from "@mui/material";
import {
    PlayerAcceptedDuel
} from "@/app/duel/component/duelOption/mobileMenu/addingOption/confirmDuel/PlayerAcceptedDuel";
import {
    PlayerRejectedDuel
} from "@/app/duel/component/duelOption/mobileMenu/addingOption/confirmDuel/PlayerRejectedDuel";

export const MessageAcceptanceDuel = ({resultAcceptanceDuel, playerData, closeMenu}) => {
    return (
        <Box
            sx={{
                width: '100%',
                padding: '20px 10px',
                position: 'absolute',
                top: '50%',
                left: 0,
                transform: 'translateY(-70%)',
                backgroundColor: '#060C1B',
                border: '1px solid white',
                borderRadius: '10px',
                textAlign: 'center',
            }}
        >
            {resultAcceptanceDuel === 'accept'
                ? <PlayerAcceptedDuel playerData={playerData} />
                : <PlayerRejectedDuel
                    playerData={playerData}
                    closeMenu={closeMenu}
                />
            }
        </Box>
    )
}