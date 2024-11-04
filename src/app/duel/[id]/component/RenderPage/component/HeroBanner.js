import {Box, Typography} from "@mui/material";
import {IconUser} from "@/utils/SVGcreate";
import {CustomImage} from "@/styledComponent/StyledComponent";
import {useContext} from "react";
import {InformationForPlayerContext} from "@/app/duel/[id]/component/ImitationServer/ImitationLoadingServer";

export const HeroBanner = () => {
    const {id, userId, avatarOwnerRoom: avatarPlayer, ownerName: playerName, betSize, quantityPlayers, quantityPlayerInRoom} = useContext(InformationForPlayerContext);

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
                    columnGap: '10px',
                }}
            >
                <Box>
                    <Typography>
                        {playerName}
                    </Typography>
                    <Typography>
                        ID: {userId}
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
                    {avatarPlayer
                        ? <CustomImage
                            src={avatarPlayer}
                            alt={''}
                            width={50}
                            height={50}
                        />
                        : <IconUser
                            sx={{
                                width: '40px',
                                height: '40px',
                            }}
                        />
                    }
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
                    }}
                >
                    <Typography>
                        SOdus
                    </Typography>
                    <Typography>
                        ID: 35880749
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