import {Box, Button, Typography} from "@mui/material";
import {CustomImage} from "@/styledComponent/StyledComponent";

export const BonusSection = props => {
    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: {xs: 'column', lg: 'row'},
                // justifyContent: {lg: 'center', xl: 'space-around'},
                justifyContent: 'space-around',
                alignItems: 'center',
                // height: '206px',
                background: 'linear-gradient(40deg, rgba(1,99,191,1) 0%, rgba(0,0,0,1) 50%, rgba(203,21,23,1) 100%)',
                backgroundRepeat: 'no-repeat',
                borderRadius: '10px',


            }}
        >
            <CustomImage
                src={'/image/dashboard/bonusSection/bonusCase.png'}
                alt={''}
                width={305}
                height={206}
                sx={{

                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: {lg: 'auto', xl: '255px'},
                    textAlign: {xs: 'center', md: 'unset', lg: 'center', xl: 'unset'},
                    pb: {xs: '20px', md: 'unset'},
                }}
            >
                <Typography
                    variant={'h5'}
                    sx={{
                        fontWeight: '700',
                        fontSize: {lg: '20px', xl: '28px'},
                        lineHeight: '27px',
                    }}

                >
                    Получайте бонус
                    каждые 24ч!
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        mt: '32px'
                    }}
                >
                    Получить
                </Button>
            </Box>
        </Box>
    )
}