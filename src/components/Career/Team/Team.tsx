"use client";
import useMediaQuery from "@/src/utils/useMediaQuery";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { NextLinePreposition } from "../../NextLinePreposition/NextLinePreposition";
import { TeamCardTriangle } from "../../svg/TeamCardTriangle";

type TeamCard = {
  title: string;
  description: string;
  alt?: boolean;
};

const TEAM_CARDS: TeamCard[] = [
  {
    title: "Успешные кейсы",
    description: "Мы изучаем и применяем лучшие практики в отраслях",
  },
  {
    title: "Решаем сложные задачи",
    description: "Мы находим точки роста в неочевидных моментах",
  },
  {
    title: "15+ экспертов",
    description:
      "Они находят решения самых сложных бизнес-задач и применяют их на практике",
    alt: true,
  },
];

export const Team = () => {
  const isSteelTablet = useMediaQuery(">=tablet");
  const isTablet = useMediaQuery("<laptop");
  const isMobile = useMediaQuery("<tablet");
  const isDesktop = useMediaQuery(">=laptop");

  return (
    <div className="flex flex-col gap-[60px]">
      <NextLinePreposition
        tag="h2"
        text="Команда опытных спецов, нацеленных на результат"
        className="break-words font-unbound text-[32px] font-bold uppercase leading-[1] tablet:text-[38px] tablet:leading-[1.1] desktop:text-[50px] desktop:leading-[1.1]"
      />
      <div className="grid grid-cols-1 gap-10 laptop-big:grid-cols-3">
        {isTablet && isSteelTablet && (
          <Swiper
            slidesPerView={1.3}
            spaceBetween={40}
            className="max-w-full"
            wrapperClass="items-stretch"
          >
            {TEAM_CARDS.map((teamCard) => (
              <SwiperSlide>
                <TeamCard key={teamCard.title} data={teamCard} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {(isMobile || isDesktop) &&
          TEAM_CARDS.map((teamCard) => (
            <SwiperSlide>
              <TeamCard key={teamCard.title} data={teamCard} />
            </SwiperSlide>
          ))}
      </div>
    </div>
  );
};

const TeamCard = ({ data }: { data: TeamCard }) => {
  return (
    <div
      className={classNames(
        "flex flex-1 flex-col h-full relative min-h-[215px] gap-[19px] p-[20px] tablet:p-[40px] bg-main-bg text-white rounded-b-[5px]",
      )}
    >
      <NextLinePreposition
        tag="h4"
        text={data.title}
        className="font-unbound text-[28px] leading-[1.1] font-bold uppercase tablet:text-[32px] desktop:text-[38px] desktop:leading-[1.25]"
      />
      <NextLinePreposition
        tag="p"
        text={data.description}
        className={classNames(
          "font-proxima text-[12px] leading-[1.15] tablet:text-[20px]",
          {
            "max-w-[75%]": data.alt,
          },
        )}
      />

      {data.alt && (
        <div className="absolute bottom-4 right-4 hidden w-[100px] tablet:block desktop:w-[181px]">
          <TeamCardTriangle />
        </div>
      )}
    </div>
  );
};
