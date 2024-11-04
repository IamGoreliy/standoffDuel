import {Box, Typography} from "@mui/material";
import {CustomImage} from "@/styledComponent/StyledComponent";

export const TimeIsOverMessage = () => {
    return (
        <Box
            sx={{
                flexBasis: {xs: 'unset', md: '30%'},
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                columnGap: '20px',
            }}
        >
            <CustomImage
                src={'/image/duelRoom/timeIsOver.png'}
                alt={''}
                width={259}
                height={257}
                sx={{
                    width: '100px',
                    height: '100px',
                }}
            />
            <Box>
                <Typography
                    variant="h5"
                    sx={{
                        color: 'red'
                    }}
                >
                    <b>ВРЕМЯ ВЫШЛО!</b>
                </Typography>
                <Typography
                    sx={{
                        fontSize: {xs: '12px', md: '14px'},
                    }}
                >
                    Дуэль была завершена автоматически, так как истекло время сжидания. Так как дузль ещё не была начата, мы вернули валюту на ваш баланс. Вы можете как вывести её, таки сыграть новые дуэли на нашем сайте!
                </Typography>
            </Box>
        </Box>
    )
}