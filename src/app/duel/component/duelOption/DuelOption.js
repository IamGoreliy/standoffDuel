import {Box, Button, Typography} from "@mui/material";
import {CustomImage, CustomLink} from "@/styledComponent/StyledComponent";
import {IconUser} from "@/utils/SVGcreate";

const buttonDuelOption = [
    {
        id: 1,
        btnName: 'посмотреть профиль',
        link: () => '',
    },
    {
        id: 2,
        btnName: 'пригласить на дуэль',
        link: (openLobby) => openLobby(true),
    },
    {
        id: 3,
        btnName: 'пожаловатся',
        link: (openReportMenu) =>  openReportMenu(true),
    },
];

export const DuelOption = ({positionWindow, dataUser, closeWindow, operationWithDuelOption}) => {
    const [positionX, positionY] = positionWindow;
    const {id, userId, avatarOwnerRoom, ownerName, betSize, quantityPlayers, quantityPlayerInRoom} = dataUser;
    return (
        <Box
            sx={{
                position: 'absolute',
                top: `${positionY}px`,
                left: `${positionX}px`,
                scale: !positionX ? 0 : 1,
                width: '250px',
                padding: '10px',
                backgroundColor: '#060C1B',
                border: '1px solid white',
                borderRadius: '5px',
                zIndex: 6,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    columnGap: '10px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '45px',
                        height: '45px',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                    }}
                >
                    {avatarOwnerRoom
                        ? <CustomImage
                            src={avatarOwnerRoom}
                            alt={''}
                            width={40}
                            height={40}
                            sx={{
                                width: '100%',
                                height: '100%',
                            }}
                        />
                        : <IconUser
                            sx={{
                                width: '35px',
                                height: '35px',
                            }}
                        />
                    }
                </Box>
                <Box>
                    <Typography>
                        {ownerName}
                    </Typography>
                    <Typography>
                        ID: {userId}
                    </Typography>
                </Box>
            </Box>
            <Box
                component="ul"
                sx={{
                    padding: 0,
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '10px',
                }}
            >
                {buttonDuelOption.map((ele, index) => {
                    const {id, btnName, link} = ele;
                    return (
                        <Box
                            key={id}
                            component="li"
                        >
                            <Button
                                onClick={() => link(operationWithDuelOption[index])}
                                variant={'contained'}
                                // href={link}
                                sx={{
                                    width: '100%',
                                    height: '40px',
                                    backgroundColor: '#17213C',
                                    '&:hover': {
                                        border: '1px solid white',
                                    },
                                }}
                            >
                                {btnName}
                            </Button>
                        </Box>
                    )
                })}
                <Button
                    onClick={() => closeWindow(0)}
                    variant={'contained'}
                    sx={{
                        background: 'linear-gradient(180deg, rgba(224,19,19,1) 0%, rgba(117,20,20,1) 100%)',
                    }}
                >
                    закрыть
                </Button>
            </Box>
        </Box>
    )
}