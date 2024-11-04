import {Box, Typography} from "@mui/material";
import {IconUser} from "@/utils/SVGcreate";
import {CustomImage} from "@/styledComponent/StyledComponent";

export const HeroBannerSkeleton = () => {
    return (
        <Box
            sx={{
                mt: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                columnGap: '10px',
                width: '100%',
                padding: '10px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexBasis: '40%',
                    // columnGap: '10px',
                }}
            >
                <Box>
                    <Typography>
                        Player 1
                    </Typography>
                    <Typography>
                        ID: 00000001
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '45px',
                        height: '45px',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                    }}
                >
                    <IconUser
                        sx={{
                            width: '40px',
                            height: '40px',
                        }}
                    />
                </Box>
            </Box>
            <CustomImage
                src={'/image/duelRoom/vsImage.png'}
                alt={''}
                width={163}
                height={83}
                sx={{
                    width: '20%',
                    height: '20%',
                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row-reverse',
                    flexBasis: '40%',
                    columnGap: '10px',
                }}
            >
                <Box
                    sx={{
                        textAlign: 'right',
                        alignItems: 'center',
                        flexBasis: '40%',
                        // columnGap: '10px',
                    }}
                >
                    <Typography>
                        Player 2
                    </Typography>
                    <Typography>
                        ID: 00000002
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '45px',
                        height: '45px',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                    }}
                >
                    <IconUser
                        sx={{
                            width: '40px',
                            height: '40px',
                        }}
                    />
                </Box>
            </Box>
        </Box>
    )
}