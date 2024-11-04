import {Box, Button, Typography} from "@mui/material";
import Link from "next/link";
import styled from "@emotion/styled";

const SpanGreen = styled.span`
    color: #3eff3e;
`;
const SpanRed = styled.span`
    color: red;
    font-weight: ${props => props.fontWeight === 'bold' ? "bold" : "normal"};
    
`;
const SpanBlue = styled.span`
    color: #1c1cff;
    font-weight: ${props => props.fontWeight === 'bold' ? "bold" : "normal"};
`;
const SpanDarkGreen = styled.span`
    color: green;
`

export const RulesSkeleton = () => {
    const linkLobby = 'https:/linkstandolf2.com/wfobbwfoin/85003d81863fad068000c04c2token=LkBiwUfsN26pN13TYEqhCUMiu0ArUH';
    return (
        <Box>
            <Box
                sx={{
                    padding: '10px',
                }}
            >
                <Typography>
                    <b>Player 1</b>, тебе необходимо зайти в игру. Поставить тип лобби <b>ЗАКРЫТОЕ</b>. режим <b>«ДУЭЛЬ»</b>. Карта <b>«Yard»</b>. После чего запускай игру.
                </Typography>
                <Typography
                    sx={{
                        mt: '10px'
                    }}
                >
                    <b>Player 2</b> присоединяется за <SpanRed fontWeight={'normal'}>террористов</SpanRed>. <b>Player 1</b> за <SpanBlue fontWeight={'normal'}>спецназ</SpanBlue>. Игра ведется до 8 побед. Запрещено использование любого софта. Если заметили нарушение или ваш оппонент вышел из игры - жмите на <span style={{color: 'red'}}>«Апелляция»</span>, после чего откроется чат споров и администратор решит, кто прав, а кто виноват. Необходимо наличие всех доказательств, поэтомурекомендуем делать скриншоты, а лучше вести запись экрана. После того, как завершите игру, жмите на <SpanGreen>«Игра завершена»</SpanGreen>. После чего укажите, <SpanDarkGreen>выиграли</SpanDarkGreen> Вы или <SpanRed>проиграли</SpanRed>. За обман сайта следует <SpanRed>автопоражение</SpanRed> и блокировка на нашем сервисе. Так что рекомендуем играть честно!
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: {xs: 'unset', md: 'space-between'},
                    alignItems: {xs: 'unset', md:'center'},
                    flexWrap: 'wrap',
                    width: '100%',
                    padding: '10px',
                    border: {xs: '1px solid white', md: 'unset'},
                }}
            >
                <Typography
                    sx={{
                        overflow: 'auto',
                    }}
                >
                    Ссылка на лобби:  <Link href={linkLobby}>{linkLobby}</Link>
                </Typography>

                <Button
                    sx={{
                        mt: '10px',
                        background: 'url(/image/duelRoom/copyLinkImg.png), linear-gradient(180deg, rgba(35,190,224,1) 0%, rgba(14,41,109,1) 100%)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        width: {xs: '100%', md: '55px'},
                        height: '55px',
                    }}
                >
                </Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: '10px',
                }}
            >
                <Button
                    sx={{
                        flexBasis: '30%',
                        background: 'linear-gradient(180deg, rgba(36,159,228,1) 0%, rgba(14,41,109,1) 50%, rgba(12,37,102,1) 100%)',
                        color: 'white',
                    }}
                >
                    Лобби
                </Button>
                <Button
                    sx={{
                        flexBasis: '30%',
                        background: 'linear-gradient(180deg, rgba(255,26,26,1) 0%, rgba(228,36,36,1) 25%, rgba(102,12,12,1) 75%, rgba(109,14,14,1) 100%)',
                        color: 'white',
                    }}
                >
                    отмена
                </Button>
                <Button
                    sx={{
                        flexBasis: '30%',
                        background: 'linear-gradient(180deg, rgba(36,228,90,1) 0%, rgba(14,109,47,1) 100%)',
                        color: 'white',
                    }}
                >
                    готово
                </Button>
            </Box>
        </Box>
    )
}