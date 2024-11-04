import {Box} from "@mui/material";
import {useCallback, useContext, useEffect, useState} from "react";
import {TurnOnBlurContext} from "@/app/duel/page";
import {DuelInvitationMenu} from "@/app/duel/component/duelOption/mobileMenu/addingOption/confirmDuel/DuelInvitationMenu";
import {ConfirmDuel} from "@/app/duel/component/duelOption/mobileMenu/addingOption/confirmDuel/ConfirmDuel";
import {
    MessageAcceptanceDuel
} from "@/app/duel/component/duelOption/mobileMenu/addingOption/confirmDuel/MessageAcceptanceDuel";

export const MobileInvitationDuel = ({dataPlayer, controlBtn}) => {
    const [confirmDuel, setConfirmDuel] = useState(false);
    const [confirmAmountDuel, setConfirmAmountDuel] = useState(0);
    const [resultAcceptanceDuel, setResultAcceptanceDuel] = useState(null);
    const turnOnBlurToggleFn = useContext(TurnOnBlurContext);

    const fnConfirmDuel = useCallback((amountDuel) => {
        setConfirmDuel(true);
        setConfirmAmountDuel(amountDuel);
    }, []);

    const closeALLMenu = useCallback(() => {
        setConfirmDuel(false);
        setConfirmAmountDuel(0);
        setResultAcceptanceDuel(null);
    }, [])

    useEffect(() => {
        if (confirmDuel) {
            const yesNoResult = Math.floor(Math.random() * 11);
            const idTimeOut = setTimeout(() => {
                if (yesNoResult > 5) {
                    setResultAcceptanceDuel('accept');
                } else {
                    setResultAcceptanceDuel('rejected');
                }
            }, 4000);

            return () => clearTimeout(idTimeOut);
        }
    }, [confirmDuel]);

    useEffect(() => {
        turnOnBlurToggleFn(true);
        document.body.style.overflowY = 'hidden';

        return () => {
            turnOnBlurToggleFn(false);
            document.body.style.overflowY = 'auto';
        };
    }, []);

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
            }}
        >
            { !confirmDuel &&
                <DuelInvitationMenu
                   dataPlayer={dataPlayer}
                   controlBtn={controlBtn}
                   requestDuel={fnConfirmDuel}
                />
            }

            { confirmDuel && !resultAcceptanceDuel &&
                <ConfirmDuel
                    dataPlayer={dataPlayer}
                    amountDuel={confirmAmountDuel}
                />
            }

            { confirmDuel && resultAcceptanceDuel &&
                <MessageAcceptanceDuel
                    resultAcceptanceDuel={resultAcceptanceDuel}
                    playerData={dataPlayer}
                    closeMenu={closeALLMenu}
                />
            }
        </Box>
    )
}