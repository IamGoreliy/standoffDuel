'use client';
import {Box, Typography} from "@mui/material";
import {ProfileUser} from "@/app/dashboard/component/ProfileUser";
import {VictoryChart} from "@/app/dashboard/component/VictoryChart";
import {BonusSection} from "@/app/dashboard/component/BonusSection";
import {HistoryMatch} from "@/app/dashboard/component/HistoryMatch";




const dashboardPage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: {xs: 'column', lg: 'row'},
                columnGap: {lg: '10px', xl:'60px'},
            }}
        >
            <Box
                sx={{
                    flexBasis: 'calc((100% / 2) - 30px)',
                }}
            >
                <ProfileUser/>
                <Box
                    sx={{
                        display: {xs: 'block', lg: 'none'},
                    }}
                >
                    <BonusSection/>
                </Box>
                <Box
                    sx={{
                        display: {xs: 'none', lg: 'block'},

                    }}
                >
                    <VictoryChart/>
                </Box>
            </Box>
            <Box
                sx={{
                    flexBasis: 'calc((100% / 2) - 30px)',
                }}
            >
                <Box
                    sx={{
                        display: {xs: 'none', lg: 'block'},
                    }}
                >
                    <BonusSection/>
                </Box>
                <Box
                    sx={{
                        display: {xs: 'block', lg: 'none'},

                    }}
                >
                    <VictoryChart/>
                </Box>
                <HistoryMatch/>
            </Box>
        </Box>
    )
}

export default dashboardPage;