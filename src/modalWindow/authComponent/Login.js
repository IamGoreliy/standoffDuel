import {Box, Typography} from "@mui/material";
import {CustomLink} from "@/styledComponent/StyledComponent";

export const Login = props => {
    const {btnAuth, toggleAuthUser} = props;
    return (
        <Box>
            <Typography
                variant="subtitle1"
                sx={{
                    color: 'white',
                }}
            >
                войти
            </Typography>
            <Box
                component='ul'
                sx={{
                    listStyle: 'none',
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '10px',
                }}
            >
                {btnAuth.map(ele => {
                    const {id, name, logoUrl,color, link} = ele;
                    return (
                        <Box
                            key={id}
                            component='li'
                            onClick={() => toggleAuthUser(name)}
                            sx={{
                                background: color,
                                borderRadius: '5px',
                                padding: '3px 5px',
                            }}
                        >
                            <CustomLink
                                href={link}
                                sx={{
                                    display: 'block',
                                    width: '100%',
                                    height: '35px',
                                    backgroundImage: `url(${logoUrl})`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center center',
                                }}
                            />
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}