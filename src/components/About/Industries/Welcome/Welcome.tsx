"use client";

import founderBig from "@/public/assets/images/about/vitaly_big.webp";
import founderMain from "@/public/assets/images/about/vitaly_main.webp";
import useMediaQuery from "@/src/utils/useMediaQuery";
import Image from "next/image";
import styles from "./Welcome.module.css";

export const Welcome = () => {
  const isMobile = useMediaQuery("<tablet");
  const isTablet = useMediaQuery("<desktop");
  const isDesktop = useMediaQuery(">=laptop");

  return (
    <div
      className={`relative flex h-[470px] tablet:overflow-hidden bg-main-bg p-[20px_12px] tablet:h-[504px] tablet:p-[100px_38px] laptop:p-[74px_120px_74px_0] desktop:overflow-visible desktop:p-[120px_120px_120px_0] desktop-big:p-[168px_238px_139px_0]`}
    >
      <Image
        src={isDesktop ? founderBig : founderMain}
        width={600}
        height={500}
        quality={80}
        alt="founder"
        className={styles.image}
      />
      <div className={styles.bgGradient} />
      <div className="mt-auto z-10 flex flex-col justify-center gap-[12px] tablet:ml-auto tablet:justify-start max-w-[371px] laptop:mt-auto laptop:mb-auto tablet:gap-[28px] laptop:max-w-[550px] desktop:ml-[auto] desktop:max-w-[985px]">
        <h2 className="font-unbound text-[18px] font-bold uppercase leading-[1.3] text-main-orange tablet:text-[24px] tablet:leading-[1.1] desktop:text-[32px] desktop-big:text-[45px]">
          Я рад приветствовать вас! <br />{" "}
          <span className="text-white">Меня зовут Виталий Зарубин</span>
        </h2>
        <p
          className={`${styles.description} font-proxima text-white text-[16px] desktop:text-[24px] leading-[1.1]`}
        >
          10+ лет разработки и управления программным обеспечением, Бывший
          технический директор спортивного хоккейного клуба, руководитель
          ИТ-платформы в компании «Газпромнефть».
        </p>
      </div>
    </div>
  );
};
