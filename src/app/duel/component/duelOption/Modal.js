import {Box} from "@mui/material";
import {DuelOption} from "@/app/duel/component/duelOption/DuelOption";
import {useCallback, useEffect, useState} from "react";
import {ReportUser} from "@/app/duel/component/duelOption/ReportUser";
import {ConfirmationReport} from "@/app/duel/component/duelOption/ConfirmationReport";
import {CreateLobby} from "@/app/duel/component/duelOption/CreateLobby";
import {WindowDuelConfirmation} from "@/app/duel/component/duelOption/WindowDuelConfirmation";
import {PlayerIsAcceptedDuel} from "@/app/duel/component/duelOption/PlayerIsAcceptedDuel";

export const Modal = ({optionForModal}) => {
    const [cursorPositionX, cursorPositionY, dataPlayer, setDuelOption] = optionForModal;
    const [openReport, setOpenReport] = useState(false);
    const [isOpenConfirmationReport, setIsOpenConfirmationReport] = useState(false);
    const [isOpenCreateLobby, setIsOpenCreateLobby] = useState(false);
    const [isOpenUserProfile, setIsOpenUserProfile] = useState(false);
    const [isOpenDuelConfirmation, setIsOpenDuelConfirmation] = useState(false);
    const [amountDuel, setAmountDuel] = useState(0);
    const [resultRequestedDuel, setResultRequestedDuel] = useState(null);

    const closeAllWindow = useCallback(() => {
        setDuelOption(false);
    }, []);

    useEffect(() => {
        if (isOpenDuelConfirmation) {
            const timeoutId = setTimeout(() => {
                const random = Math.floor(Math.random() * 11);
                if (random > 5) {
                    setResultRequestedDuel('accepted');
                } else {
                    setResultRequestedDuel('rejected');
                }
                setIsOpenDuelConfirmation(false);
            }, 4000);
            return () => clearTimeout(timeoutId);
        }
    }, [isOpenDuelConfirmation]);

    return (
        <Box
            sx={{
                display: {xs: 'none', lg: 'block'},
                position: 'absolute',
                top: 0,
                left: 0,
            }}
        >
            <DuelOption
                positionWindow={[cursorPositionX, cursorPositionY]}
                dataUser={dataPlayer}
                closeWindow={setDuelOption}
                openReport={setOpenReport}
                openCreateLobby={setIsOpenCreateLobby}
                operationWithDuelOption={[setIsOpenUserProfile, setIsOpenCreateLobby, setOpenReport]}
            />
            {openReport &&
                <ReportUser
                    positionWindowX={cursorPositionX + 30}
                    positionWindowY={cursorPositionY -30}
                    userInfo={dataPlayer}
                    openConfirmationReport={setIsOpenConfirmationReport}
                    closeReport={setOpenReport}
                />
            }
            {isOpenConfirmationReport &&
                <ConfirmationReport
                    positionWindowX={cursorPositionX + 60}
                    positionWindowY={cursorPositionY - 60}
                    userInfo={dataPlayer}
                    closeConfirmationReport={setIsOpenConfirmationReport}
                />
            }
            {isOpenCreateLobby &&
                <CreateLobby
                    userInfo={dataPlayer}
                    closeLobby={setIsOpenCreateLobby}
                    duelConfirmation={setIsOpenDuelConfirmation}
                    receivingTheDuelAmount={setAmountDuel}
                />
            }

            {isOpenDuelConfirmation &&
                <WindowDuelConfirmation
                    userInfo={dataPlayer}
                    closeWindowDuelConfirmation={setIsOpenDuelConfirmation}
                    amountDuel={amountDuel}
                />
            }

            {resultRequestedDuel &&
                <PlayerIsAcceptedDuel
                    dataPlayer={dataPlayer}
                    resultRequestedDuel={resultRequestedDuel}
                    openReport={closeAllWindow}
                />}
        </Box>
    )
}

//управление сплывающем окном Report User. где оно должно появится.
//x = 280
//y = 30