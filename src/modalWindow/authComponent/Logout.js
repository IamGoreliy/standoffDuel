import {Box, Button} from "@mui/material";
import {CustomImage} from "@/styledComponent/StyledComponent";
import {IconSettings} from "@/utils/SVGcreate";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

export const Logout = ({toggleAuthUser, btnLogout}) => {
    const [avatarUser, setAvatarUser] = useState('/image/modalAuthIcon/avatar/defaultIcon.jpg');
    const router = useRouter();

    useEffect(() => {
        return () => {
            if (avatarUser) {
                URL.revokeObjectURL(avatarUser);
            }
        };
    }, [avatarUser]);

    return (
        <Box>
            <Box>
                <Box
                    sx={{
                        position: 'relative',
                        width: '70px',
                        height: '70px',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        // overflow: 'hidden',
                        mt: '20px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        cursor: 'pointer',
                        '&:hover > #btnSettings': {
                            display: 'block',
                        },
                    }}
                >
                    <CustomImage
                        src={avatarUser}
                        alt='avatar user'
                        width={612}
                        height={612}
                        sx={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                        }}
                    />
                    <Box
                        id='btnSettings'
                        component='label'
                        onClick={({currentTarget}) => {
                            const input = currentTarget.childNodes[0];
                            input.click();
                        }}
                        sx={{
                            position: 'absolute',
                            top: 45,
                            right: 20,
                            display: 'none',
                        }}
                    >
                        {/*🥑🥑🥑🥑🥑🥑🥑🥑 Предпросмотр картинки без загрузки на сервер.🥑🥑🥑🥑🥑🥑🥑🥑🥑 */}

                        <Box
                            component={'input'}
                            type={'file'}
                            onChange={({currentTarget}) => {
                                const file = currentTarget.files[0];
                                const nameImg = currentTarget.value.replace("C:\\fakepath\\", '');
                                setAvatarUser(URL.createObjectURL(file));

                            }}
                            sx={{
                                display: 'none',
                                width: '25px',
                                height: '25px',
                                textAlign: 'center',
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                border: '1px solid white',
                            }}
                        />
                        <IconSettings
                            sx={{
                                position: 'absolute',
                                width: '25px',
                                height: '25px',
                                fill: 'black',
                                zIndex: 5,
                                rotate: '260deg',
                                top: 3,
                                left: 3,
                                borderRadius: '50%',
                                backgroundColor: 'white',

                            }}
                        />
                    </Box>
                </Box>
            </Box>
            <Box
                component='ul'
                sx={{
                    listStyle: 'none',
                    padding: 0,
                }}
            >
                {btnLogout.map(btnOption => {
                    const {id, btnName, link} = btnOption;
                    return (
                        <Box
                            key={id}
                            component='li'
                            sx={{
                                width: '100%',
                                textAlign: 'center',
                            }}
                        >
                            <Button
                                onClick={ btnName === 'выйти' ? toggleAuthUser : () => router.push('/dashboard') }
                            >
                                {btnName}
                            </Button>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}