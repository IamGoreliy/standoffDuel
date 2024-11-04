import {Box} from "@mui/material";
import {HeroBannerSkeleton} from "@/app/duel/[id]/component/suspenseSkeleton/componentSkeleton/HeroBannerSkeleton";
import {TimerSkeleton} from "@/app/duel/[id]/component/suspenseSkeleton/componentSkeleton/TimerSkeleton";
import {RulesSkeleton} from "@/app/duel/[id]/component/suspenseSkeleton/componentSkeleton/RulesSkeleton";

const placeholderFunction = () => ''

export const SkeletonPage = () => {
    return (
        <Box>
            <HeroBannerSkeleton/>
            <TimerSkeleton/>
            <RulesSkeleton/>
        </Box>
    )
}