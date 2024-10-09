import {Box, Button, Typography} from "@mui/material";
import {CustomImage} from "@/styledComponent/StyledComponent";
import {IconUser} from "@/utils/SVGcreate";
import {useCallback, useEffect, useRef, useState} from "react";
import {DuelOption} from "@/app/duel/component/DuelOption";

const fnCheckLobby = (roomPlayers, quantityPlayers) => {
    return roomPlayers > quantityPlayers;
}



export const TableForFilterDuel = (props) => {
    const {data: duelRoomData} = props;
    const [duelOption, setDuelOption] = useState(0);
    const [cursorPositionX, setCursorPositionX] = useState(0);
    const [cursorPositionY, setCursorPositionY] = useState(0);
    const floatingCursorPositionRef = useRef({x: 0, y: 0});


    const handlerCursorLocation = useCallback((e) =>  {
        floatingCursorPositionRef.current = {x: e.clientX - 577, y: e.clientY - 180};
    }, []);

    useEffect(() => {
        const tableField = document.querySelector('#table');
        tableField.addEventListener('mousemove', handlerCursorLocation);
        if (duelOption) {
            setCursorPositionX(floatingCursorPositionRef.current.x);
            setCursorPositionY(floatingCursorPositionRef.current.y);
        }

        return () => tableField.removeEventListener('mousemove', handlerCursorLocation);
    }, [duelOption]);

    return (
        <Box
            sx={{
                width: '100%',
                overflow: 'auto',
            }}
        >
            <Box
                sx={{
                    borderBottom: '1px solid #191e2b',
                    padding: '5px'

                }}
            >
                <Typography
                    variant={'h5'}
                >
                    Дуэли
                </Typography>
            </Box>
            <Box
                id={'table'}
                component={'ul'}
                sx={{
                    listStyle: 'none',
                    padding: 0,
                    // width: '600px',
                    height: '442px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    overflow: 'auto',
                    '&::-webkit-scrollbar-track': {
                        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
                        backgroundColor: '#F5F5F5',
                        borderRadius: '25px',
                    },
                    '&::-webkit-scrollbar': {
                        width: '5px',
                        backgroundColor: '#F5F5F5',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        borderRadius: '25px',
                        backgroundImage:
                            'linear-gradient(to top, rgb(122,153,217) 44%, rgb(73,125,189) 72%, rgb(28,58,148) 86%)',
                    },
                }}
            >
                {duelRoomData && duelRoomData.map(ele => {
                    const {id, avatarOwnerRoom, ownerName, betSize, quantityPlayers, quantityPlayerInRoom} = ele;
                    return (
                        <Box
                            key={id}
                            component={'li'}
                            sx={{
                                border: '1px solid #191e2b',
                                borderRadius: '10px',
                                backgroundColor: '#050914',
                                padding: '10px',
                            }}

                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                {/*тут изменение добавлен Box*/}
                                <Box
                                    onClick={() => setDuelOption(id)}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: {xs: 'none', md:'flex'},
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
                                                    width: '40px',
                                                    height: '40px',
                                                }}
                                            />
                                        }
                                    </Box>
                                    <Box
                                        sx={{
                                            width: '178px',
                                        }}
                                    >
                                        <Typography
                                            variant={'subtitle2'}
                                            sx={{
                                                color: '#6B7F9D',
                                                fontSize: '16px',
                                                lineHeight: '15px'
                                            }}
                                        >
                                            создатель
                                        </Typography>
                                        <Typography
                                            variant={'h5'}
                                        >
                                            {ownerName}
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            width: '120px',
                                            overflow: 'auto'
                                        }}
                                    >
                                        <Typography
                                            variant={'subtitle2'}
                                            sx={{
                                                color: '#6B7F9D',
                                                fontSize: '16px',
                                                lineHeight: '15px'
                                            }}
                                        >
                                            ставка
                                        </Typography>
                                        <Typography
                                            variant={'h5'}
                                        >
                                            {betSize} <span style={{color: 'yellow'}}>G</span>
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography
                                            variant={'subtitle2'}
                                            sx={{
                                                color: '#6B7F9D',
                                                fontSize: '16px',
                                                lineHeight: '15px'
                                            }}
                                        >
                                            игроки
                                        </Typography>
                                        <Typography
                                            variant={'h5'}
                                            sx={{
                                                width: '50px',
                                            }}

                                        >
                                            {quantityPlayerInRoom}/{quantityPlayers}
                                        </Typography>
                                    </Box>
                                </Box>
                                {/*конец изменений Box*/}
                                <Button
                                    variant={'contained'}
                                    // disabled={!fnCheckLobby(quantityPlayers, quantityPlayerInRoom)}
                                    sx={{
                                        display: {xs: 'none', md: 'unset'},
                                        width: '170px',
                                        height: '50px',
                                        backgroundColor: fnCheckLobby(quantityPlayers, quantityPlayerInRoom) ? 'green' : 'gray',
                                    }}
                                >
                                    Присоединиться
                                </Button>
                            </Box>
                            <Button
                                variant={'contained'}
                                // disabled={!fnCheckLobby(quantityPlayers, quantityPlayerInRoom)}
                                sx={{
                                    display: {xs: 'unset', md: 'none'},
                                    width: '100%',
                                    height: '50px',
                                    background: fnCheckLobby(quantityPlayers, quantityPlayerInRoom) ? 'linear-gradient(180deg, rgba(0,254,137,1) 0%, rgba(17,101,62,1) 100%)' : 'gray',
                                }}
                            >
                                Присоединиться
                            </Button>
                        </Box>
                    )
                })}
            </Box>
            {duelOption > 0 && <DuelOption positionWindow={[cursorPositionX, cursorPositionY]}/>}
        </Box>
    )
}