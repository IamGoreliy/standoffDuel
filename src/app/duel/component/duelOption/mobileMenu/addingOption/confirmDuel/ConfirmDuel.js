import {Box, Typography} from "@mui/material";
import {CustomImage, ExpectationIcon} from "@/styledComponent/StyledComponent";
import {IconUser} from "@/utils/SVGcreate";
import {colorRed, colorBlue, colorGreen} from "@/app/duel/component/duelOption/WindowDuelConfirmation";

export const ConfirmDuel = ({dataPlayer, amountDuel}) => {
    const {id, userId, avatarOwnerRoom, ownerName: playerName, betSize, quantityPlayers, quantityPlayerInRoom} = dataPlayer;
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
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    columnGap: '20px',
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
                        ?
                        <CustomImage
                            src={avatarOwnerRoom}
                            alt={''}
                            width={40}
                            height={40}
                            sx={{
                                width: '100%',
                                height: '100%',
                            }}
                        />
                        :
                        <IconUser
                            sx={{
                                width: '40px',
                                height: '40px',
                            }}
                        />
                    }
                </Box>
                <Box>
                    <Typography
                        variant={'h5'}
                    >
                        <b>{playerName}</b>
                    </Typography>
                    <Typography>
                        ID <b>{userId}</b>
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    mt: '20px',
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant={"subtitle1"}
                    sx={{
                        fontSize: '18px',
                    }}
                >
                    Ожидание согласия
                    противника
                </Typography>
                <Typography
                    variant={'subtitle1'}
                    sx={{
                        fontSize: '18px',
                    }}
                >
                    Ставка: <span style={{color: 'green'}}><b>{amountDuel} $</b></span>
                </Typography>
            </Box>
            <Box
                sx={{
                    mt: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    columnGap: '10px',
                }}
            >
                <ExpectationIcon
                    colorArr={colorRed}
                    expectation={0}
                />
                <ExpectationIcon
                    colorArr={colorGreen}
                    expectation={300}
                />
                <ExpectationIcon
                    colorArr={colorBlue}
                    expectation={500}
                />
            </Box>
        </Box>
    )
}