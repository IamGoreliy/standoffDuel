import {Box, Button, Typography} from "@mui/material";
import {CustomImage, ExpectationIcon} from "@/styledComponent/StyledComponent";
import {IconUser} from "@/utils/SVGcreate";

export const colorRed = ['#f68484', '#ff5f5f', '#fb4545', '#fb2727', '#f81212', '#ff0000',];
export const colorGreen = ['#a2fda2', '#74ff74', '#55ff55', '#3eff3e', '#23fd23', '#00ff00',];
export const colorBlue = ['#8e8efd', '#6d6dff', '#5050ff', '#3737ff', '#1c1cff', '#0000ff',];

export const WindowDuelConfirmation = ({userInfo, closeWindowDuelConfirmation, amountDuel}) => {
    const {id, userId, avatarOwnerRoom, ownerName: userName, betSize, quantityPlayers, quantityPlayerInRoom} = userInfo;
    return (
        <Box
            sx={{
                position: 'absolute',
                top: '50vh',
                left: '50vw',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#060C1B',
                width: '500px',
                // height: '400px',
                padding: '10px',
                zIndex: 7,
                border: '1px solid white',
                borderRadius: '5px',
            }}
        >
            <Box
                sx={{
                    borderBottom: '2px solid #191e2b',
                    padding: '10px',
                }}
            >
                <Typography>
                    Дуэль
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    columnGap: '20px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '80px',
                        height: '80px',
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
                                width: '80px',
                                height: '80px',
                            }}
                        />
                    }
                </Box>
                <Box>
                    <Typography>
                        Name: <span style={{color: 'green'}}><b>{userName}</b></span>
                    </Typography>
                    <Typography>
                        ID: <span style={{color: 'green'}}><b>{userId}</b></span>
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    textAlign: 'center',
                    mt: '30px',
                }}
            >
                <Typography
                    variant={'h4'}
                >
                    Ожидание согласия противника
                </Typography>
                <Typography
                    variant={'h4'}
                >
                    Ставка: {amountDuel}$
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
                    // sx={{backgroundColor: 'green'}}
                />
                <ExpectationIcon
                    colorArr={colorGreen}
                    expectation={300}
                />
                <ExpectationIcon
                    colorArr={colorBlue}
                    expectation={500}
                    // sx={{backgroundColor: 'blue'}}
                />
            </Box>
            <Box
                sx={{
                    mt: '30px',
                    textAlign: 'center',
                }}
            >
                <Button
                    onClick={() => closeWindowDuelConfirmation(false)}
                    variant={'contained'}
                    sx={{
                        background: 'linear-gradient(180deg, rgba(224,19,19,1) 0%, rgba(117,20,20,1) 100%)',
                    }}
                >
                    отмена
                </Button>
            </Box>
        </Box>
    )
}