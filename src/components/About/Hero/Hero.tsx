"use client";
import heroBg from "@/public/assets/images/about/about-hero-bg.webp";
import { LinkArrow } from "@/src/ui-kit/LinkArrow/LinkArrow";
import useMediaQuery from "@/src/utils/useMediaQuery";
import Image from "next/image";
import { Breadcrumb, Breadcrumbs } from "../../shared/Breadcrumbs/Breadcrumbs";
import styles from "./Hero.module.css";

const BREADCRUMBS: Breadcrumb[] = [
  { title: "Главная", link: "/" },
  { title: "О нас" },
];
export const Hero = () => {
  const isMobile = useMediaQuery("<laptop");

  return (
    <div className={`${styles.mainContainer} relative bg-ligth-bg`}>
      <div className="z-[5]">
        <Breadcrumbs breadcrumbs={BREADCRUMBS} light />
        <h1 className={`${styles.title} text-text-dark`}>О нас</h1>
      </div>
      <div className={`${styles.handbookWrapper} handbook-item`}>
        <h2 className={`${styles.handbookTitle} text-white z-10 relative`}>
          Руководство
        </h2>
        <p className={`${styles.handbookDescr} text-white z-10 relative`}>
          Руководство, которое поможет вам разобраться в тонкостях нашей работы
        </p>
        <div className={`${styles.linkBox} z-10 relative`}>
          <LinkArrow
            target="_blank"
            title="Перейти к руководству"
            link="https://drive.google.com/file/d/1M3qPsWPJAUPYu3_z80EvnKNeEPJGgxLI/view"
          />
        </div>
      </div>
      {!isMobile && (
        <Image
          src={heroBg}
          width={200}
          height={100}
          alt="background-gradient"
          className="absolute h-full w-[75%] right-0 top-0"
        />
      )}
    </div>
  );
};
