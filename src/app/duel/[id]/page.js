'use client';
import {Box} from "@mui/material";
import {duelRoomsPlayerInfo} from "@/app/duel/layout";
import {ImitationLoadingServer} from "@/app/duel/[id]/component/ImitationServer/ImitationLoadingServer";



const Page = ({params}) => {
    return (
        <Box>
            <ImitationLoadingServer playerId={params}/>
        </Box>
    )
}

export default Page;