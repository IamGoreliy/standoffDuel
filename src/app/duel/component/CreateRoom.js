import {Box, Button, TextField, Typography} from "@mui/material";
import {CustomInput} from "@/styledComponent/StyledComponent";

export const CreateRoom = ({closeDuelRoom}) => {
    return (
        <Box
            sx={{
                width: {xs: '400px', md: '600px'},
                height: {xs: '300px', md: '400px'},
                border: '1px solid white',
                borderRadius: '15px',
                backgroundColor: '#050914',
            }}
        >
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid #191e2b',
                        padding: '10px 20px'
                    }}
                >
                    <Typography
                        variant="h5"
                    >
                        Создать лобби
                    </Typography>
                    <Button
                        onClick={() => closeDuelRoom(false)}
                        variant={"outlined"}
                    >
                        X
                    </Button>
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
                            id="filled-basic"
                            label="Сумма дуэли (UA)"
                            placeholder='0.00$'
                            type={'number'}
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
                            variant={'contained'}
                            sx={{
                                flexBasis: 'calc((100% / 2) - 30px)',
                                background: 'linear-gradient(180deg, rgba(19,224,64,1) 0%, rgba(20,117,47,1) 100%)',
                            }}
                        >
                            Создать
                        </Button>
                        <Button
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
        </Box>
    )
}