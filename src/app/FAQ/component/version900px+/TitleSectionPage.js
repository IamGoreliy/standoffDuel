import {Box, Button, Typography} from "@mui/material";
import {counterMobileSize} from "@/utils/counterMobSize";

export const TitleSectionPage = ({toggleOpen}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px',
                columnGap: '10px',
                backgroundColor: 'black',
                borderRadius: '15px',
            }}
        >
            <Typography
                variant='h3'
            >
                F.A.Q
            </Typography>
            <Typography
                sx={{
                    // maxWidth: '580px',
                    fontSize: '20px',
                    lineHeight: '19px',
                }}
            >
                Здесь содержаться всевозможные ответы на ваши вопросы.
                <Box
                    component={'br'}
                    sx={{
                        display: {xs: 'none', lg: 'block'},
                    }}
                />
                Если вы не нашли ответа на вопрос, нажмите на кнопку “Задать свой вопрос”
            </Typography>
            <Button
                onClick={toggleOpen}
                sx={{
                    width: {xs: counterMobileSize('360px'), lg: '360px'},
                    height: {xs: 'auto', lg: '60px'},
                    background: 'linear-gradient(180deg, rgba(255,41,41,1) 0%, rgba(255,41,41,1) 50%, rgba(176,21,21,1) 100%)',
                    color: 'white',
                    borderRadius: '15px',
                }}
            >
                Задай свой вопрос
            </Button>
        </Box>
    )
}