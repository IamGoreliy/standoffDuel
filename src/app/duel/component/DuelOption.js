import {Box} from "@mui/material";

export const DuelOption = ({positionWindow}) => {
    const [positionX, positionY] = positionWindow;
    return (
        <Box
            sx={{
                position: 'absolute',
                top: `${positionY}px`,
                left: `${positionX}px`,
                width: '200px',
                height: '200px',
                backgroundColor: 'green',
                zIndex: 6,
            }}
        >

        </Box>
    )
}