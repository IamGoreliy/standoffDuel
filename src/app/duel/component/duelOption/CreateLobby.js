import {Box, Button, TextField, Typography} from "@mui/material";
import {useCallback, useState} from "react";

export const CreateLobby = ({userInfo, closeLobby, duelConfirmation, receivingTheDuelAmount}) => {
    const {ownerName: userName} = userInfo;
    const [duelAmount, setDuelAmount] = useState(0);

    const sendRequest = useCallback(() => {
        receivingTheDuelAmount(duelAmount);
        duelConfirmation(true);
        closeLobby(false);
    }, [duelAmount]);

    return (
        <Box
            sx={{
                position: 'absolute',
                top: '50vh',
                left: '50vw',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#060C1B',
                width: '400px',
                height: '400px',
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
                    Пригласить игрока &quot;<span style={{color: 'green'}}><b>{userName}</b></span>&quot; на Дуэль
                </Typography>
            </Box>
            <Box
                component={'form'}
                sx={{
                    mt: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '30px',
                }}
            >
                <label
                    style={{
                        position: 'relative',
                    }}
                >
                    <TextField
                        onChange={({target: {value}}) => setDuelAmount(value)}
                        id="filled-basic"
                        label="Сумма дуэли (UA)"
                        placeholder='0.00$'
                        type={'number'}
                        name={'cryptoWallet'}
                        variant="filled"
                        value={duelAmount}
                        slotProps={{
                            inputLabel: {
                                sx: {
                                    color: 'white',
                                },
                            },
                            input: {
                                sx: {
                                    display: 'block',
                                    paddingLeft: '30px',
                                    height: '49px',
                                    color: 'white',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                }
                            },
                        }}
                        sx={{
                            position: 'relative',
                            width: '100%',
                            '&:after': {
                                content: '""',
                                position: 'absolute',
                                top: '50%',
                                left: '14px',
                                display: 'none',
                                width: '20px',
                                height: '20px',
                                backgroundImage: 'url(/image/modalReplenishmentOfBalance/icon/DCCoin.png)',
                                backgroundSize: '20px',
                                backgroundRepeat: 'no-repeat',
                            },
                            '&:focus-within:after': {
                                display: 'block',
                            },
                        }}
                    />
                </label>
                <label
                    style={{
                        position: 'relative',
                    }}
                >
                    <TextField
                        id="filled-basic"
                        label="Вставте ссылку на лобби:"
                        placeholder='Ссылка'
                        type={'text'}
                        name={'cryptoWallet'}
                        variant="filled"
                        slotProps={{
                            inputLabel: {
                                sx: {
                                    color: 'white',
                                },
                            },
                            input: {
                                sx: {
                                    display: 'block',
                                    paddingLeft: '30px',
                                    height: '49px',
                                    color: 'white',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                }
                            },
                        }}
                        sx={{
                            position: 'relative',
                            width: '100%',
                            '&:after': {
                                content: '""',
                                position: 'absolute',
                                top: '50%',
                                left: '14px',
                                display: 'none',
                                width: '20px',
                                height: '20px',
                                backgroundImage: 'url(/image/modalReplenishmentOfBalance/icon/Link.png)',
                                backgroundSize: '20px',
                                backgroundRepeat: 'no-repeat',
                            },
                            '&:focus-within:after': {
                                display: 'block',
                            },
                        }}
                    />
                </label>
                <Box
                    sx={{
                        mt: {xs: '0',md: '50px'},
                        display: 'flex',
                        justifyContent: 'space-around',
                        width: '100%',
                    }}
                >
                    <Button
                        onClick={sendRequest}
                        variant={'contained'}
                        sx={{
                            flexBasis: 'calc((100% / 2) - 30px)',
                            background: 'linear-gradient(180deg, rgba(19,224,64,1) 0%, rgba(20,117,47,1) 100%)',
                        }}
                    >
                        Пригласить
                    </Button>
                    <Button
                        onClick={() => closeLobby(false)}
                        variant={'contained'}
                        sx={{
                            flexBasis: 'calc((100% / 2) - 30px)',
                            background: 'linear-gradient(180deg, rgba(224,19,19,1) 0%, rgba(117,20,20,1) 100%)',
                        }}
                    >
                        Закрыть
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}