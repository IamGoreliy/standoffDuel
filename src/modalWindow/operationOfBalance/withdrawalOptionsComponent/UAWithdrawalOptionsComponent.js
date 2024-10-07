import {Box, Button, TextField} from "@mui/material";

export const UAWithdrawalOptionsComponent = () => {
    return (
        <Box
            sx={{
                mt: '20px',
            }}
        >
            <Box
                component={'form'}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    rowGap: '20px',
                }}
            >
                <TextField
                    id="filled-basic"
                    label="Сумма вывода (UA)"
                    placeholder={'0.00'}
                    type={'number'}
                    name={'withdrawalAmount'}
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
                            backgroundImage: 'url(/image/modalReplenishmentOfBalance/icon/coins.png)',
                            backgroundSize: '20px',
                            backgroundRepeat: 'no-repeat',
                        },
                        '&:focus-within:after': {
                            display: 'block',
                        }
                    }}
                />
                <TextField
                    id="filled-basic"
                    label="Введите номер телефона или номер карты"
                    placeholder={'Телефон/номер карты'}
                    type={'number'}
                    name={'withdrawalAmount'}
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
                            backgroundImage: 'url(/image/modalReplenishmentOfBalance/icon/phone.png)',
                            backgroundSize: '20px',
                            backgroundRepeat: 'no-repeat',
                        },
                        '&:focus-within:after': {
                            display: 'block',
                        }
                    }}
                />
                <Button
                    variant={'contained'}
                    sx={{
                        mt: '20px',
                        width: '90%',
                        background: 'linear-gradient(180deg, rgba(19,224,64,1) 42%, rgba(20,117,47,1) 100%)'
                    }}
                >
                    Вывести
                </Button>
            </Box>
        </Box>
    )
}