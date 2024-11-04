import {Box, Button} from "@mui/material";
import {MobileOptionMenu} from "@/app/duel/component/duelOption/mobileMenu/MobileOptionMenu";
import {useCallback, useState} from "react";
import {MobileComplaintMenu} from "@/app/duel/component/duelOption/mobileMenu/addingOption/MobileComplaintMenu";
import {MobileInvitationDuel} from "@/app/duel/component/duelOption/mobileMenu/addingOption/MobileInvitationDuel";
import {createPortal} from "react-dom";

const mobileDuelOptionMenuBtn = [
    {
        id: 1,
        btnName: 'посмотреть профиль',
        link: () => '',
    },
    {
        id: 2,
        btnName: 'пригласить на дуэль',
        link: (openLobby) => openLobby(),
    },
    {
        id: 3,
        btnName: 'пожаловатся',
        link: (openReportMenu) =>  openReportMenu(),
    },
    {
        id: 4,
        btnName: 'закрыть',
        link: (changeStateDuelOption) =>  changeStateDuelOption(false),
    },
];

export const MobileDuelOptionMenu = ({changeStateDuelOption, dataPlayer}) => {
    const [helperStateForHidingMainOptMenu, setHelperStateForHidingMainOptMenu] = useState(false);
    const [isOpenUserProfile, setIsOpenUserProfile] = useState(false);
    const [isOpenInvitationDuel, setIsOpenInvitationDuel] = useState(false);
    const [complaintWindow, setComplaintWindow] = useState(false);

    const handelToggleComplaintMenu = useCallback(() => {
        setHelperStateForHidingMainOptMenu(!helperStateForHidingMainOptMenu);
        setComplaintWindow(!complaintWindow);
    }, [helperStateForHidingMainOptMenu, complaintWindow]);

    const handelToggleInviteDuel = useCallback(() => {
        setHelperStateForHidingMainOptMenu(!helperStateForHidingMainOptMenu);
        setIsOpenInvitationDuel(!isOpenInvitationDuel);
    }, [helperStateForHidingMainOptMenu, isOpenInvitationDuel]);

    return (
        <Box
            sx={{
                width: '100%',
            }}
        >
            {!helperStateForHidingMainOptMenu &&
                <MobileOptionMenu
                    btn={mobileDuelOptionMenuBtn}
                    fnBtnControl={[
                        setIsOpenUserProfile,
                        handelToggleInviteDuel,
                        handelToggleComplaintMenu,
                        changeStateDuelOption
                    ]}
                />
            }
            {complaintWindow &&
                <MobileComplaintMenu
                    controlBtn={[
                        '',
                        '',
                        '',
                        handelToggleComplaintMenu,
                    ]}
                />
            }
            {isOpenInvitationDuel &&
                createPortal(
                    <MobileInvitationDuel
                        dataPlayer={dataPlayer}
                        controlBtn={[
                            handelToggleInviteDuel,
                        ]}
                     />,
                    document.body)
            }
        </Box>
    )
}