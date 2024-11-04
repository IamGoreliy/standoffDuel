import {Box, Button, Typography} from "@mui/material";

const btnOption = [
    {
        id: 1,
        btnName: 'ИСПОЛЬЗОВАНИЕ ЧИТОВ',
    },
    {
        id: 2,
        btnName: 'НАРУШЕНИЕ ПРАВИЛ ДУЭЛИ',
    },
    {
        id: 3,
        btnName: 'ОСКОРБЛЕНИЕ',
    },
];

export const ReportUser = ({positionWindowX, positionWindowY, userInfo, openConfirmationReport ,closeReport}) => {
    const {ownerName} = userInfo;
    return (
        <Box
            sx={{
                position: 'absolute',
                top: `${positionWindowY}px`,
                left: `${positionWindowX}px`,
                width: '250px',
                // height: '200px',
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
                }}
            >
                <Typography>
                    Пожаловаться на игрока <span style={{color: 'red'}}><b>{ownerName}</b></span> ?
                </Typography>
            </Box>
            <Box
                component="ul"
                sx={{
                    padding: 0,
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '10px',
                }}
            >
                {btnOption.map(item => {
                    const {id, btnName} = item;
                    return (
                        <Box
                            key={id}
                            component="li"
                        >
                            <Button
                                onClick={() => openConfirmationReport(true)}
                                variant="contained"
                                sx={{
                                    width: '100%',
                                    height: '40px',
                                    backgroundColor: '#17213C',
                                    '&:hover': {
                                        border: '1px solid white',
                                    },
                                }}
                            >
                                {btnName}
                            </Button>
                        </Box>
                    )
                })}
                <Button
                    onClick={() => closeReport(false)}
                    variant={'contained'}
                    sx={{
                        background: 'linear-gradient(180deg, rgba(224,19,19,1) 0%, rgba(117,20,20,1) 100%)',
                    }}
                >
                    закрыть
                </Button>
            </Box>
        </Box>
    )
}