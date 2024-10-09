'use client';
import {Box, Typography} from "@mui/material";
import {IconArrow} from "@/utils/SVGcreate";
import {useState} from "react";

const questionsAndAnswers = [
    {
        id: 1,
        question: 'Я не нашел ответа на свой вопрос, у меня есть предложение или я заметил ошибку. Что делать?',
        answer: 'Для вывода золота необходимо перейти в свой личный кабинет. Далее нужно нажать на “купить золото. Золото покупается за деньги, находящиеся у вас на балансе сайта. После того, как вы купили золото, вы можете его вывести. Для этого нажмите на “вывести золото” и следуйте инструкциям.',
    },
    {
        id: 2,
        question: 'Кто берет комиссию внутриигровго рынка при вывод золота?',
        answer: 'Для вывода золота необходимо перейти в свой личный кабинет. Далее нужно нажать на “купить золото. Золото покупается за деньги, находящиеся у вас на балансе сайта. После того, как вы купили золото, вы можете его вывести. Для этого нажмите на “вывести золото” и следуйте инструкциям.',
    },
    {
        id: 3,
        question: 'Почему для вывода используется только SM1014 “Wave”? Что делать, если у меня его нет?',
        answer: 'Для вывода золота необходимо перейти в свой личный кабинет. Далее нужно нажать на “купить золото. Золото покупается за деньги, находящиеся у вас на балансе сайта. После того, как вы купили золото, вы можете его вывести. Для этого нажмите на “вывести золото” и следуйте инструкциям.',
    }
];

function selectQuestion(id, state, fnToggleSection) {
      if (!state) {
          fnToggleSection(id);
          return;
      }
      if (state && state === id) {
          fnToggleSection(0);
          return;
      }
      fnToggleSection(id);
}

export const QuestionSection = ({questionsAndAnswers}) => {
    const [whatQuestionOpen, setWhatQuestionOpen] = useState(0);
    return (
        <Box
            component={'ul'}
            sx={{
                listStyle: 'none',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                rowGap: {xs: '10px', md:'20px'},
            }}
        >
            {questionsAndAnswers.map(ele => {
                const {id, question, answer} = ele;
                return (
                    <Box
                        key={id}
                        component={'li'}
                        sx={{
                            backgroundColor: 'black',
                            padding: '20px',
                            borderRadius: '15px',
                        }}
                    >
                        <Box
                            onClick={() => selectQuestion(id, whatQuestionOpen, setWhatQuestionOpen)}
                            sx={{
                                display: 'flex',
                                cursor: 'pointer',
                                alignItems: 'center',
                                columnGap: '20px',
                            }}
                        >
                            <IconArrow
                                sx={{
                                    width: {xs: '20px', md: '34px'},
                                    height: '17px',
                                    transform: whatQuestionOpen === id ? 'rotate(180deg)' : 'rotate(0deg)',
                                }}
                            />
                            <Typography
                                sx={{
                                    fontSize: {xs: '14px', md: '24px'},
                                    lineHeight: {xs: '13px', md: '23px'},
                                    color: '#F6EEF5',
                                }}
                            >
                                {question}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                mt: '38px',
                                display: whatQuestionOpen === id ? 'block' : 'none',
                                borderTop: '1px solid #293546',
                                padding: '38px 0px',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: {xs: '14px', md: '24px'},
                                    lineHeight: {xs: '13px', md: '23px'},
                                    color: '#CFD1DD'
                                }}
                            >
                                {answer}
                            </Typography>
                        </Box>
                    </Box>
                )
            })}
        </Box>
    )
}