import {Box, Button, Typography} from "@mui/material";
import {QuestionSection} from "@/app/FAQ/component/version900px+/QuestionSection";

export const MobilePage = ({questionsAndAnswers, toggleOpen}) => {
    return (
        <Box>
            <Button
                variant="contained"
                onClick={toggleOpen}
                sx={{
                    width: '100%',
                    height: '54px',
                }}
            >
                Задать свой вопрос
            </Button>
            <Box
                sx={{
                    mt: '20px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Typography
                    variant="h4"
                >
                    F.A.Q
                </Typography>
                <Typography
                    sx={{
                        fontSize: '12px',
                        lineHeight: 1.19,
                    }}
                >
                    Здесь содержаться всевозможные ответы на ваши вопросы.
                    Если вы не нашли ответа на вопрос, нажмите на кнопку “Задать свой вопрос”
                </Typography>
            </Box>
            <QuestionSection questionsAndAnswers={questionsAndAnswers} />
        </Box>
    )
}