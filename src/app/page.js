import {Box} from "@mui/material";
import {Header} from "@/app/component/Header";
import {TitleSection} from "@/app/component/TitleSection";
import {HowToPlaySection} from "@/app/component/HowToPlaySection";
import {BonusSection} from "@/app/component/BonusSection";

export default function Home() {
  return (
      <Box>
        <TitleSection/>
        <HowToPlaySection/>
        <BonusSection/>
      </Box>
  );
}
