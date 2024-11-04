import {Box, Button, Typography} from "@mui/material";

export const ConfirmationReport = ({positionWindowX, positionWindowY, userInfo, closeConfirmationReport}) => {
    const {ownerName: userName} = userInfo;
    return (
        <Box
            sx={{
                position: 'absolute',
                top: `${positionWindowY}px`,
                left: `${positionWindowX}px`,
                width: '300px',
                padding: '10px' ,
                backgroundColor: '#060C1B',
                border: '1px solid white',
                borderRadius: '5px',
                zIndex: 6,
            }}
        >
            <Box
                sx={{
                    borderBottom: '2px solid #191e2b',
                    paddingBottom: '10px',
                }}
            >
                <Typography>
                    Пожаловаться на игрока &quot;<span style={{color: 'red'}}><b>{userName}</b></span>&quot;
                </Typography>
            </Box>
            <Box>
                <Typography
                    variant={'h5'}
                >
                    Вы действительно хотите пожаловать на игрока &quot;<span style={{color: 'red'}}><b>{userName}</b></span>&quot;
                </Typography>
                <Box
                    sx={{
                        mt: '20px',
                        display: 'flex',
                        columnGap: '10px',
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            width: '50%',
                            background: 'linear-gradient(180deg, rgba(41,255,101,1) 0%, rgba(17,130,69,1) 100%)',
                        }}
                    >
                        да
                    </Button>
                    <Button
                        onClick={() => closeConfirmationReport(false)}
                        variant="contained"
                        sx={{
                            width: '50%',
                            background: 'linear-gradient(180deg, rgba(224,19,19,1) 0%, rgba(117,20,20,1) 100%)',
                        }}
                    >
                        отмена
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}