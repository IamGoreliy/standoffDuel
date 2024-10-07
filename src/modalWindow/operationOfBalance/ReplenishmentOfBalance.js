'use client';
import {Box, Grid2, TextField, Select, MenuItem, FormControl, InputLabel, Typography, Button} from "@mui/material";
import {CustomImage} from "@/styledComponent/StyledComponent";
import {useState} from "react";



const mobileOperator = [
    {
        id: 1,
        urlImg: '/image/modalReplenishmentOfBalance/mobileOperator/mts.png',
        width: 40,
        height: 40,
        color: 'red',
        value: 'mts',
    },
    {
        id: 2,
        urlImg: '/image/modalReplenishmentOfBalance/mobileOperator/Tele2.png',
        width: 51,
        height: 21,
        color: 'black',
        value: 'tele2'
    },
    {
        id: 3,
        urlImg: '/image/modalReplenishmentOfBalance/mobileOperator/megafon.png',
        width: 85,
        height: 16,
        color: 'green',
        value: 'megafon',
    },
    {
        id: 4,
        urlImg: '/image/modalReplenishmentOfBalance/mobileOperator/Yota.png',
        width: 70,
        height: 31,
        color: 'white',
        value: 'Yota',
    },
    {
        id: 5,
        urlImg: '/image/modalReplenishmentOfBalance/mobileOperator/Beeline.png',
        width: 87,
        height: 17,
        color: 'yellow',
        value: 'beeline',
    }
];




export const ReplenishmentOfBalance = ({paymentSystems}) => {
    const [selectedMobOperator, setSelectedMobOperator] = useState('');
    const [bonusValue, setBonusValue] = useState(0);
    const [whatSystemSelected, setWhatSystemSelected] = useState();

    const handleChange = ({target}) => {
        console.dir(target.value)
        setSelectedMobOperator(target.value);
    }

    const bonusCalculation = ({target : {value}}) => {
        setBonusValue(value * 10);
    }


    return (
        <Box>
            <Grid2
                container
                sx={{
                    justifyContent: 'center',
                    gap: '20px'
                }}
            >
                {paymentSystems.map(ele => {
                    const {id, imgUrl, whatSystem} = ele;
                    return (
                        <Grid2
                            key={id}
                            size={{ xs: 5, sm: 2.5, md: 2.5, lg: 2.5 }}
                            onClick={() => setWhatSystemSelected(whatSystem)}
                        >
                            <CustomImage
                                src={imgUrl}
                                alt={''}
                                width={155}
                                height={84}
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                            />
                        </Grid2>
                    )
                })}
            </Grid2>
            <Box
                component={'form'}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    rowGap: '15px',
                    mt: '20px',
                }}
            >
                <TextField
                    id="filled-required"
                    label="промокод"
                    placeholder={'введите промокод (если есть)'}
                    variant="filled"
                    slotProps={{
                        inputLabel: {
                            sx: {
                                color: 'white'
                            }
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
                            backgroundImage: 'url(/image/modalReplenishmentOfBalance/icon/stars.png)',
                            backgroundSize: '20px',
                            backgroundRepeat: 'no-repeat',
                        },
                        '&:focus-within:after': {
                            display: 'block',
                        },
                    }}
                />
                { whatSystemSelected === 'numPhone' && <FormControl
                    sx={{
                        width: '100%'
                    }}
                >
                    <InputLabel
                        id="selectOperatorLabel"
                        sx={{
                            color: 'white',
                        }}

                    >
                        выберете оператора
                    </InputLabel>
                    <Select
                        labelId="selectOperatorLabel"
                        id="demo-simple-select-filled"
                        value={selectedMobOperator}
                        onChange={handleChange}
                        autoWidth={true}
                        variant={'outlined'}
                        MenuProps={{
                            anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'right', // Выравнивание меню справа
                            },
                            transformOrigin: {
                                vertical: 'bottom',
                                horizontal: 'right', // Смещение открытия меню относительно элемента
                            },
                            PaperProps: {
                                sx: {
                                    borderRadius: '20px',
                                    background: 'linear-gradient(150deg, rgba(1,83,161,1) 0%, rgba(14,13,14,1) 40%, rgba(38,11,13,1) 60%, rgba(188,2,6,1) 100%)',
                                    color: 'white',
                                },
                            },
                        }}
                        sx={{
                            textAlign: 'center',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            width: '100%',
                            height: '50px',
                        }}
                    >
                        <MenuItem value="">
                            <em>Моб. Оператор</em>
                        </MenuItem>
                        {mobileOperator.map(ele => {
                            const {id, urlImg, width, height, color, value} = ele;
                            return (
                                <MenuItem
                                    key={id}
                                    value={value}
                                    sx={{
                                        width: '179px',
                                        height: '47px',
                                        backgroundColor: color,
                                    }}
                                >
                                    <CustomImage
                                        src={urlImg}
                                        alt={''}
                                        width={width}
                                        height={height}
                                    />
                                </MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>}
                <TextField
                    onChange={bonusCalculation}
                    id="filled-required"
                    label="сумма пополнения ₴"
                    placeholder={'0.00₴'}
                    type={'number'}
                    variant="filled"
                    slotProps={{
                        inputLabel: {
                            sx: {
                                color: 'white'
                            }
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
                        },
                    }}
                />
                <Box
                    sx={{
                        width: '100%',
                    }}
                >
                    <Typography
                        variant={"subtitle2"}
                        sx={{
                            width: '100%',
                            padding: '16.5px 32px 16.5px 14px',
                            color: 'white'
                        }}
                    >
                        Вы получите на баланс:
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{
                            textAlign: 'center',
                            color: 'white'
                        }}
                    >
                        {bonusValue}<span style={{color:"yellow"}}>G</span>
                    </Typography>
                </Box>
                <Button
                    variant={'contained'}
                    sx={{
                        width: '90%',
                        background: 'linear-gradient(180deg, rgba(19,224,64,1) 42%, rgba(20,117,47,1) 100%)'
                    }}
                >
                    пополнить баланс
                </Button>
            </Box>
        </Box>
    )
}

//width={179}
//height={47}