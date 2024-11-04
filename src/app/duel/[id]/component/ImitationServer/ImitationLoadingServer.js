'use client';
import {duelRoomsPlayerInfo} from "@/app/duel/layout";
import {createContext, useContext, useEffect, useState} from "react";
import {SkeletonPage} from "@/app/duel/[id]/component/suspenseSkeleton/SkeletonPage";
import {RenderPage} from "@/app/duel/[id]/component/RenderPage/RenderPage";

export const InformationForPlayerContext = createContext({})


const imitationServerResponse = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const playerInfo = duelRoomsPlayerInfo.find(ele => ele.id === +id);
            resolve(playerInfo);
        }, 3000);
    })
}

export const ImitationLoadingServer = ({playerId: {id}}) => {
    const [informationForPlayer, setInformationForPlayer] = useState(null);

    useEffect(() => {
        imitationServerResponse(id)
            .then(data => setInformationForPlayer(data))
            .catch(error => console.log(error));
    }, [id]);

    if (!informationForPlayer) {
        return (<SkeletonPage/>)
    }

    return (
        <h1 style={{color: 'white'}}>
            <InformationForPlayerContext.Provider value={informationForPlayer}>
                <RenderPage/>
            </InformationForPlayerContext.Provider>
        </h1>
    )
}



