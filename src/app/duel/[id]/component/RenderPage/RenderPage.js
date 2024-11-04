import {Box} from "@mui/material";
import {HeroBanner} from "@/app/duel/[id]/component/RenderPage/component/HeroBanner";
import {Timer} from "@/app/duel/[id]/component/RenderPage/component/Timer";
import {Rules} from "@/app/duel/[id]/component/RenderPage/component/Rules";
import {useEffect, useState} from "react";

export const RenderPage = () => {
    const [approvedDuel, setApprovedDuel] = useState(false);
    const [cancelDuel, setCancelDuel] = useState(false);
    const [timerValue, setTimerValue] = useState(120000);


    useEffect(() => {
        if (approvedDuel) {
            setTimerValue(1800000);
        } else {
            setTimerValue(120000);
        }
    }, [approvedDuel]);

    return (
        <Box>
            <HeroBanner/>
            <Timer time={timerValue} approvedDuel={approvedDuel} />
            <Rules btnControlDuel={[approvedDuel, setApprovedDuel, setCancelDuel]}/>
        </Box>
    )
}