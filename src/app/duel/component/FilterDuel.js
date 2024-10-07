import {Box, Button, Typography} from "@mui/material";
import {CustomImage, CustomInput} from "@/styledComponent/StyledComponent";

export const FilterDuel = ({controlFilterInput, fnDesc, resetFilter, createDuelRoom}) => {
    const [minBetAmount, setMinBetAmount, maxBetAmount, setMaxBetAmount] = controlFilterInput;


    return (
        <Box
            sx={{
                width: "365px",
            }}
        >
            <Button
                onClick={() => createDuelRoom(true)}
                variant="contained"
                color="primary"
                sx={{
                    width: '100%',
                    height: "78px",
                }}
            >
                + Создать комнату
            </Button>
            <Box
                component="form"
                sx={{
                    width: '100%',
                    height: '141px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: '#050914',
                }}
            >
                <Typography
                    variant={'h5'}
                >
                    Ставка дуэли
                </Typography>
                <Box
                    sx={{
                        width: '100%',
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        mt: '30px',
                    }}
                >
                    <Typography>
                        от
                    </Typography>
                    <label
                        style={{
                            position: 'relative',
                        }}
                    >
                        <CustomImage
                            src={'/image/duel/icon/money.png'}
                            alt={''}
                            width={15}
                            height={15}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: 5,
                                transform: 'translateY(-50%)',
                            }}
                        />
                        <CustomInput
                            onChange={(e) => setMinBetAmount(e.target.value)}
                            type="number"
                            placeholder={'Cумма'}
                            value={minBetAmount === 0 ? '' : minBetAmount}
                        />
                    </label>
                    <Typography>
                        до
                    </Typography>
                    <label
                        style={{
                            position: 'relative',
                        }}
                    >
                        <CustomImage
                            src={'/image/duel/icon/money.png'}
                            alt={''}
                            width={15}
                            height={15}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: 5,
                                transform: 'translateY(-50%)',
                            }}
                        />
                        <CustomInput
                            onChange={(e) => setMaxBetAmount(e.target.value)}
                            type="number"
                            placeholder={'Cумма'}
                            value={maxBetAmount === 0 ? '' : maxBetAmount}

                        />
                    </label>

                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '365px',
                    mt: '30px',
                    rowGap: '20px',
                }}
            >
                <Button
                    onClick={() => fnDesc(true)}
                    variant={'contained'}
                    sx={{
                        height: '78px',
                        background: 'linear-gradient(180deg, rgba(41,255,101,1) 0%, rgba(17,130,69,1) 100%)',
                    }}
                >
                    По убыванию суммы
                </Button>
                <Button
                    onClick={() => resetFilter(true)}
                    variant={'contained'}
                    sx={{
                        height: '78px',
                        background: 'linear-gradient(180deg, rgba(36,45,54,1) 0%, rgba(18,23,27,1) 100%)',
                    }}
                >
                    По умолчанию
                </Button>
            </Box>
        </Box>
    )
}