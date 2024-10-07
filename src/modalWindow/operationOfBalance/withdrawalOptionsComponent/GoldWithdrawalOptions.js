import {Box, TextField, Typography, FormControl, InputLabel, Select, MenuItem, Button} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import {CustomImage} from "@/styledComponent/StyledComponent";

const userSkin = [
    {
        id: 1,
        avatarName: 'picture of a man designed by AI',
        avatarImgUrl: '/image/modalReplenishmentOfBalance/userAvatars/avatar1.jpg',
        cost: '1500',
    },
    {
        id: 2,
        avatarName: 'Mr Man Carrot',
        avatarImgUrl: '/image/modalReplenishmentOfBalance/userAvatars/avatar2.jpg',
        cost: '2300',
    },
    {
        id: 3,
        avatarName: 'Mrs Doubtfire lizard woman',
        avatarImgUrl: '/image/modalReplenishmentOfBalance/userAvatars/avatar3.jpg',
        cost: '800',
    },
    {
        id: 4,
        avatarName: 'Tony Stark in the multiverse',
        avatarImgUrl: '/image/modalReplenishmentOfBalance/userAvatars/avatar4.jpg',
        cost: '1999',
    },
];

const findCostAvatar = (avatarName) => {
        return userSkin.find(ele => ele.avatarName === avatarName).cost;
}

export const GoldWithdrawalOptionsComponent = () => {
    const [whatSkinUser, setWhatSkinUser] = useState('');
    const [whatFileSelect, setWhatFileSelect] = useState('');
    const inputFile = useRef(null);

    const handleChangeSelect = ({target: {value}}) => {
        setWhatSkinUser(value);
    }

    const downloadFile = () => {
        inputFile.current.click();
    }

    return (
        <Box>
            <Box
                component={'form'}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    rowGap: '20px',
                }}
            >
                <input
                    ref={inputFile}
                    type='file'
                    name='setFileAvatar'
                    onChange={(e) => setWhatFileSelect(e.target.value)}
                    style={{
                        display: 'none',
                    }}
                />
                <TextField
                    id="filled-basic"
                    label="1. Загрузите вашу игровую аватарку"
                    variant="filled"
                    placeholder='загрузить файл'
                    onClick={downloadFile}
                    value={whatFileSelect}
                    slotProps={{
                        inputLabel: {
                            sx: {
                                color: 'white',
                            },
                        },
                        input: {
                            sx: {
                               color: 'white',
                               backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            }
                        },
                    }}
                    sx={{
                        width: '100%',
                        '& input::placeholder': {
                            textAlign: 'center',
                        },
                    }}
                />
                <TextField
                    id="filled-basic"
                    label="2. Сумма вывода (GOLD)"
                    variant="filled"
                    type='number'
                    name='withdrawalAmount'
                    placeholder={'0.00'}
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
                            },
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
                <FormControl fullWidth>
                    <InputLabel
                        id="demo-simple-select-label"
                        sx={{
                            color: 'white',
                        }}
                    >
                        3. Выберете любой скин из списка
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={whatSkinUser}
                        label="skin"
                        name='avatar'
                        autoWidth={true}
                        onChange={handleChangeSelect}
                        sx={{
                            textAlign: 'center',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        }}
                        MenuProps={{
                            PaperProps: {
                                sx: {

                                },
                            }
                        }}
                    >
                        <MenuItem value="">
                            <em>выберете из списка</em>
                        </MenuItem>
                        {userSkin.map(ele => {
                            const {id, avatarName, avatarImgUrl} = ele;
                            return (
                                <MenuItem
                                    key={id}
                                    value={avatarName}
                                    sx={{
                                        justifyContent: 'center'
                                    }}
                                >
                                    <CustomImage
                                        src={avatarImgUrl}
                                        alt={avatarName}
                                        width={640}
                                        height={640}
                                        sx={{
                                            width: '100px',
                                            height: '100px',
                                        }}
                                    />
                                </MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
                <Typography
                    variant={'subtitle1'}
                    sx={{
                        width: '100%',
                        padding: '16.5px 32px 16.5px 14px',
                        color: 'white',
                    }}
                >
                    4. Выставьте скин на торговую площадку за:
                </Typography>
                <Typography
                    variant={'h4'}
                    sx={{
                        color: 'white',
                    }}
                >
                    {whatSkinUser !== '' ? findCostAvatar(whatSkinUser) : 0} <span style={{color: 'yellow'}}>G</span>
                </Typography>
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