import missionImg from "@/public/assets/images/about/card/card_mission.webp";
import nonesenseImg from "@/public/assets/images/about/card/card_nonsense.webp";
import remoteImg from "@/public/assets/images/about/card/card_remote.webp";
import { StaticImageData } from "next/image";

interface ICard {
  id: number;
  tag: string;
  title: string;
  image: StaticImageData;
}

export const CardsData: ICard[] = [
  { id: 1, tag: "Миссия", title: "Только крутые проекты", image: missionImg },
  {
    id: 2,
    tag: "удаленный формат",
    title: "Мы работаем полностью удаленно",
    image: remoteImg,
  },
  {
    id: 3,
    tag: "Идем до конца",
    title: "Завершаем проекты при любых обстоятельствах",
    image: nonesenseImg,
  },
];
