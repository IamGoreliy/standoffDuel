import {Box, Typography} from "@mui/material";
import {CustomImage} from "@/styledComponent/StyledComponent";
import {useCallback, useEffect, useState} from "react";
import moment from "moment";
import {SectionCard} from "@/app/duel/[id]/component/RenderPage/component/mobileUtils/SectionCard";
import {TimeIsNotOverMessage} from "@/app/duel/[id]/component/RenderPage/component/TimeIsNotOverMessage";
import {TimeIsOverMessage} from "@/app/duel/[id]/component/RenderPage/component/TimeIsOverMessage";




export const Timer = ({time, approvedDuel}) => {
    const [timeForTimer, setTimeForTimer] = useState(0);


    useEffect(() => {
        setTimeForTimer(time);

        const idInterval = setInterval(() => {
            setTimeForTimer((prevTime) => {
                if (prevTime === 0) {
                    clearInterval(idInterval);
                    return prevTime;
                }
                return prevTime - 1000;
            });
        }, 1000);

        return () => clearInterval(idInterval);
    }, [time]);

    return (
        <Box
            sx={{
                display: {xs: 'block', md: 'flex'},
                justifyContent: {xs: 'unset', md: 'space-between'},
                alignItems: {xs: 'unset', md:'center'},
                width: '100%',
                // height: {xs: '190px', md: 'unset'},
                backgroundImage: {xs: 'url(/image/duelRoom/backgroundRulesMobile.png)', md: 'unset'},
                backgroundRepeat: 'no-repeat',
                backgroundSize: {xs: '100%', md: 'unset'},
                backgroundPosition: 'center',
                padding: '10px',
            }}
        >
            {timeForTimer
                ? <TimeIsNotOverMessage approvedDuel={approvedDuel} />
                : <TimeIsOverMessage/>
            }
            <Box
                sx={{
                    mt: {xs: '30px', md: 'unset'},
                    display: 'flex',
                    flexBasis: {xs: 'unset', md: '30%'},
                    justifyContent: {xs: approvedDuel ? 'space-between' : 'center', md:'center'},
                    alignItems: 'center',
                }}
            >
                {approvedDuel && <SectionCard whatDevice={'mobile'}/>}
                <Typography
                    variant={'h4'}
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    <Box
                        component={'span'}
                        sx={{
                            fontSize: {xs: approvedDuel ? '30px' : '48px', md: '48px'},
                        }}
                    >
                        {moment(timeForTimer).format('mm:ss')}
                    </Box>
                    <Box
                        component={'span'}
                        sx={{
                            fontSize: '18px'
                        }}
                    >
                        мин.
                    </Box>
                </Typography>
            </Box>
            {approvedDuel && <SectionCard whatDevice={'pc'}/>}
            { !approvedDuel &&
                <Box
                    sx={{
                        display: {xs: 'none', md: 'block'},
                        flexBasis: '30%',
                        background: 'url(/image/duelRoom/backgroundForPC.png), radial-gradient(circle at 75% 0%, rgba(219,35,35,1) 0%, rgba(7,8,8,0) 60%), radial-gradient(circle at 42% 100%, rgba(56,182,244,1) 0%, rgba(0,0,0,1) 60%)',
                        height: '180px',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'bottom'
                    }}
                >

                </Box>
            }
        </Box>
    )
}


