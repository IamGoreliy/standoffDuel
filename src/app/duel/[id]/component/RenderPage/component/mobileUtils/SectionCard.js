import {Box, Typography} from "@mui/material";
import {CustomImage} from "@/styledComponent/StyledComponent";

const mobile = {
    // marginTop: '30px',
    display: {xs: 'flex', md: 'none'},
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: '30px',
    borderRadius: '10px',
    backgroundColor: '#0e141b',

}

const pc = {
    flexBasis: {xs: 'unset', md: '30%'},
    display: {xs: 'none', md: 'flex'},
    justifyContent: 'right',
    alignItems: 'center',
}

export const SectionCard = ({whatDevice}) => {
    return (
        <Box
            sx={
                whatDevice === 'mobile' ? mobile : pc
            }
        >
            <Box>
                <Typography>
                    карта
                </Typography>
                <Typography>
                    Bridge
                </Typography>
            </Box>
            <CustomImage
                src={'/image/duelRoom/placeholderImgCart.jpg'}
                alt={''}
                width={144}
                height={81}
                sx={{
                    borderRadius: '10px',
                }}
            />
        </Box>
    )
}