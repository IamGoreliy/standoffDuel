'use client';
import {Box} from "@mui/material";
import {DuelRoomData} from "@/app/duel/layout";
import {useCallback, useContext, useEffect, useState} from "react";
import {FilterDuel} from "@/app/duel/component/FilterDuel";
import {TableForFilterDuel} from "@/app/duel/component/TableForFilterDuel";
import {CreateRoom} from "@/app/duel/component/CreateRoom";

function compareNumbers(a, b) {
    return a - b;
}

const Page = () => {
    const duelRoomData = useContext(DuelRoomData);
    const [dataRender, setDataRender] = useState(null);
    const [minBetAmount, setMinBetAmount] = useState(0);
    const [maxBetAmount, setMaxBetAmount] = useState(0);
    const [descendingFilter, setDescendingFilter] = useState(false);
    const [resetFilter, setResetFilter] = useState(false);
    const [createDuelRoom, setCreateDuelRoom] = useState(false);


    useEffect(() => {
        const filterMaxBetAmount = maxBetAmount <= 1 ? 10000 : +maxBetAmount;
        let result = duelRoomData.filter(ele => minBetAmount <= +ele.betSize && +ele.betSize <= filterMaxBetAmount);
        setDataRender(result);
    }, [minBetAmount, maxBetAmount]);

    useEffect(() => {
        if (descendingFilter) {
            dataRender.sort((a, b) => b.betSize - a.betSize);
        }
        setDescendingFilter(false);
    }, [descendingFilter]);

    useEffect(() => {
        if (resetFilter) {
            setDataRender(duelRoomData);
            setMinBetAmount(0);
            setMaxBetAmount(0);
        }
        setResetFilter(false);
    }, [resetFilter]);

    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: {xs: 'column', lg: 'row'},
                justifyContent: {xs: 'center', lg: 'unset'},
                alignItems: {xs: 'center', lg: 'unset'},
                columnGap: '30px',
                border: '1px solid #191e2b',
                mt: '50px',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: {xs: '10%', lg: '20%'},
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    transform: createDuelRoom ? 'scale(1)' : 'scale(0)',
                    transition: 'transform 500ms linear',
                    zIndex: 5,
                }}
            >
                <CreateRoom closeDuelRoom={setCreateDuelRoom} />
            </Box>
            <FilterDuel
                controlFilterInput={
                    [
                        minBetAmount,
                        setMinBetAmount,
                        maxBetAmount,
                        setMaxBetAmount
                    ]
                }
                fnDesc={setDescendingFilter}
                resetFilter={setResetFilter}
                createDuelRoom={setCreateDuelRoom}
            />
            <TableForFilterDuel data={dataRender} />
        </Box>
    )
}
export default Page;

