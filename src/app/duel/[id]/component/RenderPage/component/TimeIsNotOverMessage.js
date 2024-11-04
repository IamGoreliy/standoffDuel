import {Box, Typography} from "@mui/material";
import {CustomImage} from "@/styledComponent/StyledComponent";

export const TimeIsNotOverMessage = ({approvedDuel}) => {
    return (
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
                { !approvedDuel
                    ?<Typography>
                        У вас имееться 2 минуты
                        чтобы присоединиться в лобби
                        опонента.
                        Следуйте указанием ниже!
                    </Typography>
                    :<Typography
                        sx={{
                            fontSize: '12px',
                        }}
                    >
                        C этого момента все максимально серьёозно. Рекомендуем начать записать видео, чтобы в случае обмана со стороны вашего оппонента у вас были доказательства своей невиновности.
                    </Typography>
                }
            </Box>
        </Box>
    )
}