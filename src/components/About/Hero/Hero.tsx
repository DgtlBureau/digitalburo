'use client';
import heroBg from '@/public/assets/images/about/about-hero-bg.webp';
import { LinkArrow } from '@/src/ui-kit/LinkArrow/LinkArrow';
import useMediaQuery from '@/src/utils/useMediaQuery';
import Image from 'next/image';
import { Breadcrumb, Breadcrumbs } from '../../shared/Breadcrumbs/Breadcrumbs';
import styles from './Hero.module.css';

const BREADCRUMBS: Breadcrumb[] = [
  { title: 'Главная', link: '/' },
  { title: 'О нас' },
];
export const Hero = () => {
  const isMobile = useMediaQuery('<laptop');

  return (
    <div className={`${styles.mainContainer} bg-ligth-bg relative`}>
      <div className='z-[5]'>
        <Breadcrumbs breadcrumbs={BREADCRUMBS} light />
        <h1 className={`${styles.title} text-text-dark`}>О нас</h1>
      </div>
      <div className={`${styles.handbookWrapper} handbook-item`}>
        <h2 className={`${styles.handbookTitle} relative z-10 text-white`}>
          Руководство
        </h2>
        <p className={`${styles.handbookDescr} relative z-10 text-white`}>
          Руководство, которое поможет вам разобраться в тонкостях нашей работы
        </p>
        <div className={`${styles.linkBox} relative z-10`}>
          <LinkArrow
            target='_blank'
            title='Перейти к руководству'
            link='https://drive.google.com/file/d/1M3qPsWPJAUPYu3_z80EvnKNeEPJGgxLI/view'
          />
        </div>
      </div>
      {!isMobile && (
        <Image
          src={heroBg}
          width={200}
          height={100}
          alt='background-gradient'
          className='absolute right-0 top-0 h-full w-[75%]'
        />
      )}
    </div>
  );
};
