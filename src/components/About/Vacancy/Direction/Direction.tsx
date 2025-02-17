'use client';
import { LinkArrow } from '@/src/ui-kit/LinkArrow/LinkArrow';

import classNames from 'classnames';
import styles from './Direction.module.css';
// import Link from 'next/link'

export const Direction = () => {
  const scrollToContacts = () => {
    const contactsSection = document.getElementById('contacts');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <ul className={styles.directionWrapper}>
        <li onClick={scrollToContacts} className='cursor-pointer'>
          <div className={classNames(styles.directionBox, styles.partner)}>
            <h3 className={`${styles.tag} z-20 font-proxima`}>Партнерам</h3>
            <p className={`${styles.description} z-20 font-proxima`}>
              Хотите работать с нами? Оставьте заявку или отправьте письмо по
              электронной почте
            </p>
            <p className='z-20 mt-[32px] hidden w-fit'>
              <LinkArrow title='Подробнее' link='#' />
            </p>
          </div>
        </li>
        <li onClick={scrollToContacts} className='cursor-pointer'>
          <div className={classNames(styles.directionBox, styles.expert)}>
            <h3 className={`${styles.tag} z-20 font-proxima`}>Экспертам</h3>
            <p className={`${styles.description} z-20 font-proxima`}>
              О том, как к нам попасть и какие вакансии есть, читайте в разделе
              «Карьера».
            </p>
            <p className='z-20 mt-[32px] hidden w-fit'>
              <LinkArrow title='Подробнее' link='#' />
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};
