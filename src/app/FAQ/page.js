'use client';
import {Box} from "@mui/material";
import {TitleSectionPage} from "@/app/FAQ/component/version900px+/TitleSectionPage";
import {QuestionSection} from "@/app/FAQ/component/version900px+/QuestionSection";
import {useCallback, useEffect, useState} from "react";
import {AskYourQuestion} from "@/app/FAQ/component/version900px+/AskYourQuestion";
import {MobilePage} from "@/app/FAQ/component/versionMobile/MobilePage";

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

const handleCloseModalForPressEsc = (event, fnChangeState) => {
    if (event.key === "Escape") {
        fnChangeState(false);
    }
}

const Page = () => {
    const [yourQuestionWindow, setYourQuestionWindow] = useState(false);

    const toggleModal = useCallback(() => setYourQuestionWindow(prevState => !prevState), []);
    const pressEscape = useCallback((e) => handleCloseModalForPressEsc(e, setYourQuestionWindow), []);

    useEffect(() => {
        if (yourQuestionWindow) {
            window.document.addEventListener("keydown", pressEscape);

            return () => window.document.removeEventListener("keydown", pressEscape);
        }
    }, [yourQuestionWindow, pressEscape]);


    return (
        <Box
            sx={{
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    display: {xs: 'none', md: 'block'},
                }}
            >
                <TitleSectionPage toggleOpen={toggleModal}/>
                <QuestionSection questionsAndAnswers={questionsAndAnswers}/>
            </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: {xs: '70%', md: '90%'},
                        left: '50%',
                        transform: `translate(-50%, -50%) scale(${ yourQuestionWindow ? 1 : 0})`,
                        transformOrigin: 'top right',
                        transition: 'transform 500ms linear',
                        width: {xs: '100%', md:'80%'},
                        backgroundColor: '#060c1b',
                        zIndex: 5,
                        borderRadius: '15px',
                        padding: '30px',
                        border: '1px solid #293546',
                    }}
                >
                    <AskYourQuestion toggleClose={toggleModal}/>
                </Box>
            <Box
                sx={{
                    display: {xs: 'block', md: 'none'},
                }}
            >
                <MobilePage questionsAndAnswers={questionsAndAnswers} toggleOpen={toggleModal}/>
            </Box>
        </Box>
    )
}

export default Page;