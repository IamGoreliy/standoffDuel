'use client';
import {Box, Container, Typography} from "@mui/material";
import {CustomImage} from "@/styledComponent/StyledComponent";

const rules = [
    {
        id: 1,
        title: 'Пополните баланс',
        desc: 'Дуэли - игра на золото. Чтобы играть с другими игроками, вам нужно иметь баланс. На нашем сайте есть любые способы оплаты, и все работает а автоматическом режиме, пополняй баланс и выйгрывай!',
        imageUrl: '/image/howToPlay/img1.webp',
        gradient: 'radial-gradient(circle at 80% 80%, rgba(36,160,241,0.5) 14%, rgba(0,0,0,0.5) 62%)',

    },
    {
        id: 2,
        title: 'Начать игру',
        desc: 'Далее нужно найти соперников. Для этого перейдите во вкладку Дуэли, там будет список доступных игр, если не будет, попробуйте создать игру сами, и к вам обезательно присоеденятся!',
        imageUrl: '/image/howToPlay/img2.webp',
        gradient: 'radial-gradient(circle at 80% 80%, rgba(255,182,57,0.6) 5%, rgba(0,0,0,0.5) 42%)',

    },
    {
        id: 3,
        title: 'Вывод средств',
        desc: 'Если вам удалось выйграть других игроков и заработать голду, то необходимо ее вывеси, Вкладка “вывод” находится где и пополнения. К слову, можно выводить не только золото, но и рубли!',
        imageUrl: '/image/howToPlay/img3.webp',
        gradient: 'radial-gradient(circle at 75% 70%, rgba(64,215,76,0.5) 12%, rgba(0,0,0,0.5) 55%)',

    },
];

export const HowToPlaySection = () => {
    return (
        <Box
            sx={{
                padding: '20px 0px',
            }}
        >
            <Container
                maxWidth={'xl'}
                sx={{
                    maxWidth: {xs: '980px' , md: '1520px'},
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: 'center',
                        color: 'white',
                    }}
                >
                    Как играть дуэли?
                </Typography>
                <Box
                    component={'ul'}
                    sx={{
                        mt: {xs: '0px', lg: '35px'},
                        listStyle: 'none',
                        padding: 0,
                        display: 'flex',
                        flexDirection: {xs: 'column', lg: 'row'},
                        justifyContent: {xs: 'unset', lg: 'space-between'},
                        alignItems: {xs: 'center', lg: 'unset'},
                        rowGap: {xs: '20px', lg: 'unset'},
                        columnGap: {xs: 'unset', lg: '40px'},

                    }}
                >
                    {rules.map(element => {
                        const {id, title, desc, imageUrl, gradient} = element;
                        return (
                            <Box
                                key={id}
                                component="li"
                                sx={{
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    // width: '100%',
                                    // height:  '238px',
                                    background: gradient,
                                    maxWidth: '433px',
                                }}
                            >
                                <Box
                                    sx={{
                                        flexBasis: '50%'
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontSize: '1.2rem',
                                            fontWeight: 600,
                                            color: 'white',
                                        }}
                                    >
                                        {title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: 'white',
                                            fontSize: '0.9rem',

                                        }}
                                    >
                                        {desc}
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        right: 0,
                                        flexBasis: '50%',
                                        width: '60%',
                                        height: '100%',
                                    }}
                                >
                                    <CustomImage
                                        src={imageUrl}
                                        alt={''}
                                        width={518}
                                        height={400}
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                        }}
                                    />
                                </Box>
                            </Box>
                        )
                    })}
                </Box>
            </Container>
        </Box>
    )
}