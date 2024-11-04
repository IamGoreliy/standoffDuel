import {Box, Button, TextField, Typography} from "@mui/material";
import {useState} from "react";

export const DuelInvitationMenu = ({dataPlayer, controlBtn, requestDuel}) => {
    const {id, avatarOwnerRoom, ownerName: playerName, betSize, quantityPlayers, quantityPlayerInRoom} = dataPlayer;
    const [closeModal] = controlBtn;
    const [duelAmount, setDuelAmount] = useState(0);

    return (
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: 0,
                transform: 'translateY(-50%)',
                width: '100%',
                backgroundColor: '#060C1B',
                border: '2px solid green',
                borderRadius: '10px',
            }}
        >
            <Box
                sx={{
                    padding: '10px',
                    borderBottom: '1px solid #191e2b',
                }}
            >
                <Typography
                    variant="h6"
                >
                    Пригласить игрока <span style={{color: 'green'}}>{playerName}</span> на Дуэль
                </Typography>
            </Box>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '10px',
                    rowGap: '10px',
                }}
            >
                <label
                    style={{
                        position: 'relative',
                    }}
                >
                    <TextField
                        onChange={({target: {value}}) => setDuelAmount(+value)}
                        id="filled-basic"
                        label="Сумма дуэли (UA)"
                        placeholder='0.00$'
                        type={'number'}
                        name={'cryptoWallet'}
                        variant="filled"
                        value={duelAmount ? duelAmount : ''}
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
                                    width: '90%',
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
                                    width: '90%',
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
                        mt: '20px',
                        display: 'flex',
                        justifyContent: 'space-around',
                    }}
                >
                    <Button
                        onClick={() => requestDuel(duelAmount)}
                        variant={"contained"}
                        sx={{
                            width: '40%',
                            background: 'linear-gradient(180deg, rgba(19,224,64,1) 0%, rgba(20,117,47,1) 100%)',
                        }}
                    >
                        Пригласить
                    </Button>
                    <Button
                        onClick={() => closeModal()}
                        variant={"contained"}
                        sx={{
                            width: '40%',
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