import {Box, Container} from "@mui/material";

const Template = ({children}) => {
    return (
        <Container
            component="div"
            maxWidth="1420"
            sx={{

                maxWidth: '1420px',
            }}
        >
            {children}
        </Container>
    )
}

export default Template;