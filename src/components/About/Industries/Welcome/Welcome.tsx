'use client'

import founderImg from '@/public/assets/images/about/vitaly.webp'
import founderMImg from '@/public/assets/images/about/vitaly_m.webp'
import founderTImg from '@/public/assets/images/about/vitaly_t.webp'
import useMediaQuery from '@/src/utils/useMediaQuery'
import Image from 'next/image'
import styles from './Welcome.module.css'

export const Welcome = () => {
  const isMobile = useMediaQuery('<tablet')
  const isTablet = useMediaQuery('<desktop')
  const isDesktop = useMediaQuery('>=desktop')

  return (
    <div className='relative mt-[46px] flex h-[316px] bg-main-bg p-[20px_12px] tablet:mt-[88px] tablet:h-fit tablet:p-[74px_14px] laptop:p-[74px_180px_74px_0] desktop:p-[120px_238px_120px_0]   desktop-big:p-[168px_238px_139px_0]'>
      <Image
        src={
          isDesktop
            ? founderImg
            : isTablet && isMobile
              ? founderMImg
              : founderTImg
        }
        width={600}
        height={500}
        quality={80}
        alt='founder'
        className={styles.image}
      />
      <div className='ml-[135px] flex flex-col justify-center gap-[12px] tablet:ml-[291px] tablet:gap-[28px] desktop:ml-[auto] desktop:max-w-[867px]'>
        <h2 className='font-unbound text-[22px] font-bold uppercase leading-[1] text-main-orange tablet:text-[32px] tablet:leading-[1.1] desktop-big:text-[44px]'>
          Я рад приветствовать вас! <br />{' '}
          <span className='text-white'>Меня зовут Виталий Зарубин</span>
        </h2>
        <p className={`${styles.description} font-proxima text-white`}>
          10+ лет разработки и управления программным обеспечением, Бывший
          технический директор спортивного хоккейного клуба, руководитель
          ИТ-платформы в компании «Газпромнефть».
        </p>
      </div>
    </div>
  )
}
