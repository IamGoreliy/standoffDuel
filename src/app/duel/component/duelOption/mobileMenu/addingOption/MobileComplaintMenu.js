import {Box, Button} from "@mui/material";

const complaintMenuBtn = [
    {
        id: 1,
        btnName: 'использование читов',
        link: (fnChange) => '',
    },
    {
        id: 2,
        btnName: 'нарушение правил дуэли',
        link: (fnChange) => '',
    },
    {
        id: 3,
        btnName: 'оскорбление',
        link: (fnChange) =>  '',
    },
    {
        id: 4,
        btnName: 'отмена',
        link: (fnChange) => fnChange(false),
    },
]

export const MobileComplaintMenu = ({controlBtn}) => {
    return (
        <Box
            component="ul"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '10px',
                width: '100%',
                padding: 0,
                listStyle: 'none',
            }}
        >
            {complaintMenuBtn.map((ele, index) => {
                const {id, btnName, link} = ele;
                return (
                    <Box
                        key={id}
                        component="li"
                    >
                        <Button
                            onClick={() => link(controlBtn[index])}
                            variant="contained"
                            sx={{
                                width: '100%',
                                background: id === 4 ? 'linear-gradient(180deg, rgba(224,19,19,1) 0%, rgba(117,20,20,1) 100%)' : 'linear-gradient(180deg, rgba(0,254,137,1) 0%, rgba(17,101,62,1) 100%)',
                            }}
                        >
                            {btnName}
                        </Button>
                    </Box>
                )
            })}
        </Box>
    )
}