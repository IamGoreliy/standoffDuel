import {Box, Button, Typography} from "@mui/material";
import Link from "next/link";
import styled from "@emotion/styled";
import {useContext, useState} from "react";
import {InformationForPlayerContext} from "@/app/duel/[id]/component/ImitationServer/ImitationLoadingServer";
import {IconAdminAvatar, IconPaperClip, IconUser} from "@/utils/SVGcreate";
import {CustomImage} from "@/styledComponent/StyledComponent";

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

const initialStateFakeComments = [

    {
        whoseComment: 'adminRules',
        avatar: <IconAdminAvatar sx={{width:'30px', height: '30px', fill: 'white'}}/>,
        interlocutorName: 'Standoff Duels Administration',
        message: <>Это чат споров. При <SpanRed>апелляции</SpanRed> сюда заходит <SpanBlue>администратор</SpanBlue> сайта и решает,кто <SpanGreen>выиграл</SpanGreen>, а кто <SpanRed>проиграл</SpanRed>. Апелляцию следует принимать только в крайних мерах. За ложную апелляцию дается <SpanRed>автопоражение</SpanRed>, при повторном нарушении - блокировка на нашем сервисе. Подавайте только тогда, когда увидели явные нарушения со стороны противника!</>
    }
]



export const Rules = ({btnControlDuel}) => {
    const {id, userId, avatarOwnerRoom: avatarPlayer, ownerName: playerName, betSize, quantityPlayers, quantityPlayerInRoom} = useContext(InformationForPlayerContext);
    const linkLobby = 'https:/linkstandolf2.com/wfobbwfoin/85003d81863fad068000c04c2token=LkBiwUfsN26pN13TYEqhCUMiu0ArUH';
    const [stateApproved, toggleApprovedDuel, toggleCanselDuel] = btnControlDuel;
    const [reportInputValue, setReportInputValue] = useState('');
    const [fakeComment, setFakeComment] = useState(initialStateFakeComments);
    const [appealButton, setAppealButton] = useState(false);


    const handleClickFileField = () => {
        const fileInput = document.querySelector("#fileReport");
        fileInput.click();
    }

    const handleRecordFakeComment = () => {
        const result = {
            whoseComment: 'user',
            avatar: avatarPlayer,
            interlocutorName: 'S0dus',
            message: reportInputValue,
        };
        setFakeComment(prevState => {
            return [...prevState, result];
        });
        setReportInputValue('');
    }

    return (
        <Box>
            <Box
                sx={{
                    padding: '10px',
                }}
            >
                <Typography>
                    <b>{playerName}</b>, тебе необходимо зайти в игру. Поставить тип лобби <b>ЗАКРЫТОЕ</b>. режим <b>«ДУЭЛЬ»</b>. Карта <b>«Yard»</b>. После чего запускай игру.
                </Typography>
                <Typography
                    sx={{
                        mt: '10px'
                    }}
                >
                    <b>SOdus</b> присоединяется за <SpanRed fontWeight={'normal'}>террористов</SpanRed>. <b>{playerName}</b> за <SpanBlue fontWeight={'normal'}>спецназ</SpanBlue>. Игра ведется до 8 побед. Запрещено использование любого софта. Если заметили нарушение или ваш оппонент вышел из игры - жмите на <span style={{color: 'red'}}>«Апелляция»</span>, после чего откроется чат споров и администратор решит, кто прав, а кто виноват. Необходимо наличие всех доказательств, поэтомурекомендуем делать скриншоты, а лучше вести запись экрана. После того, как завершите игру, жмите на <SpanGreen>«Игра завершена»</SpanGreen>. После чего укажите, <SpanDarkGreen>выиграли</SpanDarkGreen> Вы или <SpanRed>проиграли</SpanRed>. За обман сайта следует <SpanRed>автопоражение</SpanRed> и блокировка на нашем сервисе. Так что рекомендуем играть честно!
                </Typography>
            </Box>
            { !stateApproved &&
                <>
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
                            onClick={() => toggleCanselDuel(true)}
                            sx={{
                                flexBasis: '30%',
                                background: 'linear-gradient(180deg, rgba(255,26,26,1) 0%, rgba(228,36,36,1) 25%, rgba(102,12,12,1) 75%, rgba(109,14,14,1) 100%)',
                                color: 'white',
                            }}
                        >
                            отмена
                        </Button>
                        <Button
                            onClick={() => toggleApprovedDuel(true)}
                            sx={{
                                flexBasis: '30%',
                                background: 'linear-gradient(180deg, rgba(36,228,90,1) 0%, rgba(14,109,47,1) 100%)',
                                color: 'white',
                            }}
                        >
                            готово
                        </Button>
                    </Box>
                </>
            }
            { stateApproved &&
                <>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: {xs: 'space-between', md: 'end'},
                            columnGap: {xs: 'unset', md: '10px'},
                            padding: '10px',
                        }}
                    >
                        <Button
                            onClick={() => setAppealButton(!appealButton)}
                            sx={{
                                flexBasis: {xs: '47%', md: 'unset'},
                                background: 'linear-gradient(180deg, rgba(255,26,26,1) 0%, rgba(228,36,36,1) 25%, rgba(102,12,12,1) 75%, rgba(109,14,14,1) 100%)',
                                color: 'white',
                            }}
                        >
                            Аппеляция
                        </Button>
                        <Button
                            sx={{
                                flexBasis: {xs: '47%', md: 'unset'},
                                background: 'linear-gradient(180deg, rgba(36,228,90,1) 0%, rgba(14,109,47,1) 100%)',
                                color: 'white',
                            }}
                        >
                            Игра завершена
                        </Button>
                    </Box>
                    {
                        <Box
                            component={'form'}
                            sx={{
                                width: '100%',
                                height: appealButton ? '450px' : '0px',
                                transition: 'height 500ms linear, transform 500ms linear',
                                overflow: 'hidden',
                            }}
                        >
                            <Typography
                                variant="h3"
                            >
                                Чат Споров
                            </Typography>

                            <Box
                                sx={{
                                    mt: '20px',
                                    width: '100%',
                                    height: '320px',
                                    backgroundColor: 'white',
                                    borderRadius: '10px',
                                    padding: '10px',
                                    overflow: 'auto',
                                }}
                            >
                                <Box
                                    component={'ul'}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        rowGap: '5px',
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0,
                                    }}
                                >
                                    {fakeComment.length && fakeComment.map((comment, index) => {
                                        const {whoseComment, avatar, interlocutorName, message} = comment;
                                        return (
                                            <Box
                                                key={index}
                                                component="li"
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: whoseComment === 'user' ? 'row' : 'row-reverse',
                                                    justifyContent: whoseComment !== 'user' ? 'start' : 'end',

                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        margin: whoseComment === 'user' ? '5px 5px 0px 0px' : '5px 0px 0px 5px',
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            width: '36px',
                                                            height: '36px',
                                                            backgroundColor: 'black',
                                                            borderRadius: '50%',
                                                        }}
                                                    >
                                                        {whoseComment === 'adminRules'
                                                            ? avatar
                                                            :
                                                            avatarPlayer
                                                                ? <CustomImage
                                                                    src={avatarPlayer}
                                                                    alt={''}
                                                                    width={30}
                                                                    height={30}
                                                                    sx={{
                                                                        width: '100%',
                                                                        height: '100%',
                                                                    }}
                                                                />
                                                                : <IconUser
                                                                    sx={{
                                                                        fill: 'white',
                                                                        width: '30px',
                                                                        height: '30px',
                                                                    }}
                                                                />

                                                        }
                                                    </Box>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        display: 'inline-block',
                                                        borderRadius: '10px',
                                                        backgroundColor: whoseComment === 'user' ? 'rgb(0, 178, 255)' : 'rgb(173, 132, 255)',
                                                        padding: '10px',
                                                        overflow: 'hidden',
                                                    }}
                                                >
                                                    <Typography>
                                                        <b>{interlocutorName}</b>
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            mt: '5px',
                                                        }}
                                                    >
                                                        {message}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        )
                                    })}
                                </Box>
                            </Box>
                            <Box
                                component={'label'}
                                mt
                            >
                                <Box
                                    id={'fileReport'}
                                    component={'input'}
                                    name={'reportReport'}
                                    type={'file'}
                                    hidden={true}
                                >

                                </Box>
                            </Box>
                            <Box
                                component={'label'}
                                sx={{
                                    mt: '10px',
                                    position: 'relative',
                                    display: 'block',
                                    height: '45px',
                                }}
                            >
                                <Box
                                    onChange={({target: {value}}) => setReportInputValue(value)}
                                    component={'input'}
                                    name={'report'}
                                    type={'text'}
                                    placeholder={'написать сообщение...'}
                                    value={reportInputValue}
                                    sx={{
                                        display: 'block',
                                        width: '100%',
                                        height: '100%',
                                        paddingLeft: '40px',
                                        paddingRight: '50px',
                                        fontSize: {xs: '16px', md: '20px'},
                                        backgroundColor: '#10172B',
                                        borderColor: 'transparent',
                                        color: 'white',
                                    }}
                                >

                                </Box>
                                <Button
                                    onClick={handleClickFileField}
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        minWidth: 0,
                                        width: '40px',
                                        height: '100%',
                                    }}
                                >
                                    <IconPaperClip
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            fill: '#4A6896',
                                        }}
                                    />
                                </Button>
                                <Button
                                    onClick={handleRecordFakeComment}
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        right: 0,
                                        width: '50px',
                                        height: '100%',
                                        backgroundImage: 'url(/image/duelRoom/submitAppeal.png)',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: '100% 100%',
                                        minWidth: 'unset',

                                    }}
                                >

                                </Button>
                            </Box>
                        </Box>
                    }
                </>
            }
        </Box>
    )
}




