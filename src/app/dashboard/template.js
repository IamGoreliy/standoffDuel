'use client';
import {Box, Container} from "@mui/material";
import {CustomLink} from "@/styledComponent/StyledComponent";
import {counterMobileSize} from "@/utils/counterMobSize";

const btnNav = [
    {
        id: 1,
        nameBtn: 'Главная',
        link: '/'
    },
    {
        id: 2,
        nameBtn: 'Дуэли',
        link: '/'
    },
    {
        id: 3,
        nameBtn: 'Поддержка',
        link: '/'
    },
];

const Template = ({children}) => {
    return (
        <Box>
            <Container maxWidth="xl">
                {children}
            </Container>
        </Box>
    )
}

export default Template;