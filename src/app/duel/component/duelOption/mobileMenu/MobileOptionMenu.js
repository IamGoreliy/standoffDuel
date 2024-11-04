import {Box, Button} from "@mui/material";

export const MobileOptionMenu = ({btn, fnBtnControl}) => {
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
            {btn.map((ele, index) => {
                const {id, btnName, link} = ele;
                return (
                    <Box
                        key={id}
                        component="li"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',

                        }}
                    >
                        <Button
                            onClick={() => link(fnBtnControl[index])}
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