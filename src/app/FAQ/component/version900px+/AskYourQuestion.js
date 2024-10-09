'use client';
import {Box, Button, Typography} from "@mui/material";
import {IconBack, IconEmail, IconPaperClip} from "@/utils/SVGcreate";
import {useState} from "react";
import debounce from 'lodash.debounce'

const debounced = debounce((value, fnChangeState) => fnChangeState(value), 250);

const clickInputFile = () => {
    const inputFile = document.querySelector('#inputFile');
    inputFile.click();
}

export const AskYourQuestion = ({toggleClose}) => {
    const [userQuestion, setUserQuestion] = useState('');
    const [userDetailQuestion, setUserDetailQuestion] = useState('');
    const [userFile, setUserFile] = useState({});
    const [userEmail, setUserEmail] = useState('');



    const handlerUserQuestion = (e) => {
        const value = e.target.value;
        debounced(value, setUserQuestion);
    }
    const handlerDetailsUserQuestion = (e) => {
        const value = e.target.value;
        debounced(value, setUserDetailQuestion);
    }

    return (
        <Box
            sx={{

            }}
        >
            <Button
                onClick={toggleClose}
            >
                <IconBack
                    sx={{
                        fill: 'white',
                    }}
                />
            </Button>
            <Box
                component='form'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '25px',
                }}
            >
                <Box
                    sx={{
                        backgroundColor: 'black',
                        padding: {xs: 0, md:'20px'},
                    }}
                >
                    <Typography>
                        Тема вопроса
                    </Typography>
                    <Box
                        onChange={handlerUserQuestion}
                        component='textarea'
                        name={'userQuestion'}
                        placeholder={'Написать сообщение...'}
                        sx={{
                            mt: '20px',
                            padding: '10px',
                            resize: 'none',
                            width: '100%',
                            height: '150px',
                            backgroundColor: 'transparent',
                            border: '1px solid #293546',
                            borderRadius: '5px',
                            color: 'white',
                        }}
                    >

                    </Box>
                    <Typography
                        sx={{
                            mt: '10px',
                            textAlign: 'right',
                            color: '#8690AE',
                        }}
                    >
                        <span style={{color: userQuestion.length > 100 ? 'red' : 'greenyellow'}}>{userQuestion.length}</span>/100
                    </Typography>
                </Box>
                <Box
                    sx={{
                        backgroundColor: 'black',
                        padding: {xs: 0, md: '20px'},
                    }}
                >
                    <Typography>
                        подробности
                    </Typography>
                    <Box
                        onChange={handlerDetailsUserQuestion}
                        component='textarea'
                        name={'detailsUserQuestion'}
                        placeholder={'Написать сообщение...'}
                        sx={{
                            mt: '20px',
                            padding: '10px',
                            resize: 'none',
                            width: '100%',
                            height: '150px',
                            backgroundColor: 'transparent',
                            border: '1px solid #293546',
                            borderRadius: '5px',
                            color: 'white'
                        }}
                    >
                    </Box>
                    <Box
                        onChange={({target}) => setUserFile(target.files[0])}
                        id={'inputFile'}
                        component='input'
                        name={'userFile'}
                        type={'file'}
                        sx={{
                            display: 'none',
                        }}
                    />
                    <Box
                        sx={{
                            mt: '10px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Button
                            onClick={() => clickInputFile()}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                color: '#4A6896',
                            }}
                        >
                            <IconPaperClip
                                sx={{
                                    marginRight: '10px',
                                    fill: '#4A6896',
                                }}
                            />
                            <span style={{color: userFile?.name ? 'greenyellow' : 'unset'}}> {userFile?.name ?? 'Прикрепить файл'}</span>
                        </Button>
                        <Typography
                            sx={{
                                color: '#8690AE',
                            }}
                        >
                            <span style={{color: userDetailQuestion.length > 1000 ? 'red' : 'greenyellow'}}>{userDetailQuestion.length}</span>/1000
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {xs: 'column', md: 'row'},
                        alignItems: 'center',
                        backgroundColor: 'black',
                        padding: {xs: 0, md: '20px'},
                        rowGap: {xs: '10px', md: 'unset'},
                    }}
                >
                   <Box
                     component={'label'}
                     sx={{
                         position: 'relative',
                         flexBasis: {xs: 'unset', md:'80%'},
                         width: {xs: '100%', md: 'unset'},
                     }}
                   >
                      <Box
                           component='input'
                           name={'userMail'}
                           type={'email'}
                           placeholder={'Введите свою почту, чтобы мы через нее смогли с Вами связаться'}
                           onChange={({currentTarget: {value}}) => setUserEmail(value)}
                           value={userEmail}
                           sx={{
                               width: '100%',
                               height: '40px',
                               paddingLeft: {xs: '30px', md: '50px'},
                               backgroundColor: 'transparent',
                               border: '1px solid #293546',
                               borderRadius: '5px',
                               color: 'white',
                           }}
                      />
                      <IconEmail
                           sx={{
                               position: 'absolute',
                               top: '50%',
                               left: '10px',
                               transform: 'translateY(-50%)',
                               width: {xs: '15px', md: 'unset'},
                               height: {xs: '15px', md: 'unset'},
                           }}
                      />
                   </Box>
                   <Button
                       sx={{
                           flexBasis: {xs: 'unset', md: '20%'},
                           width: {xs: '100%', md: 'unset'},
                           color: 'white',
                           background: 'linear-gradient(180deg, rgba(36,228,90,1) 0%, rgba(14,109,47,1) 100%)',
                       }}
                   >
                       Отправить
                   </Button>
                </Box>
            </Box>
        </Box>
    )
}