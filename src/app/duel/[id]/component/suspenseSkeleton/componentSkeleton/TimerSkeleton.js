import {Box, Typography} from "@mui/material";
import {CustomImage} from "@/styledComponent/StyledComponent";
import {useEffect, useState} from "react";
import moment from "moment";



export const TimerSkeleton = () => {

    return (
        <Box
            sx={{
                display: {xs: 'block', md: 'flex'},
                justifyContent: {xs: 'unset', md: 'space-between'},
                alignItems: {xs: 'unset', md:'center'},
                width: '100%',
                backgroundImage: 'url(/image/duelRoom/backgroundRulesMobile.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                backgroundPosition: 'center',
                padding: '10px',
            }}
        >
            <Box
                sx={{
                    flexBasis: {xs: 'unset', md: '30%'},
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    columnGap: '20px',
                }}
            >
                <Box>
                    <CustomImage
                        src={'/image/duelRoom/warningImage.png'}
                        alt={''}
                        width={158}
                        height={134}
                        sx={{
                            width: '79px',
                            height: '67px',
                        }}
                    />
                </Box>
                <Box>
                    <Typography>
                        У вас имееться 2 минуты
                        чтобы присоединиться в лобби
                        опонента.
                        Следуйте указанием ниже!
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    mt: {xs: '30px', md: 'unset'},
                    flexBasis: {xs: 'unset', md: '30%'},
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant={'h4'}
                >
                    <span style={{fontSize: '48px'}}>{moment(0).format('mm:ss')}</span><span style={{fontSize: '18px'}}>мин.</span>
                </Typography>
            </Box>
        </Box>
    )
}