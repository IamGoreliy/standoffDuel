'use client';
import {Box, Container} from "@mui/material";
const Template = ({children}) => {
    return (
        <Box>
            <Container
                maxWidth="lg"
            >
                {children}
            </Container>
        </Box>
    )
}

export default Template;