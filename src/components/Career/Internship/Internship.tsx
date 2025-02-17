import teamImage from "@/public/assets/images/about/card/card_remote.webp";
import { LinkArrow } from "@/src/ui-kit/LinkArrow/LinkArrow";
import classNames from "classnames";
import Image from "next/image";
import styles from "./Internship.module.css";

export const Internship = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.InternContainer}>
        <h3 className={styles.title}>Стажировка для студентов</h3>
        <p className="mt-[19px] font-proxima text-[12px] tablet:text-[20px] leading-[1.2] ">
          Мы ищем целеустремленных и амбициозных студентов или выпускников,
          которые увлечены разработкой ИТ и стремятся развивать свои навыки.
          Независимо от уровня вашего опыта, мы приветствуем всех, кто готов
          принять вызов и двигаться вперед вместе с нами.
        </p>
        <div className="mt-[auto] w-fit">
          <LinkArrow title="Подать заявку" link="#" />
        </div>
      </div>
      <div className={styles.listContainer}>
        <ul className={styles.numList}>
          <li className={styles.numItem}>
            <span className={styles.num}>1</span>
            <div className={styles.numContent}>
              <h3 className={classNames(styles.title, styles.blackTitle)}>
                Посмотрите на вакансии
              </h3>
              <span className={`${styles.tag} font-proxima`}>
                #МыВсегдаВПоиске
              </span>
            </div>
          </li>
          <li className={styles.numItem}>
            <span className={styles.num}>2</span>
            <div className={styles.numContent}>
              <h3 className={classNames(styles.title, styles.blackTitle)}>
                Прочитайте наши статьи
              </h3>
              <span className={`${styles.tag} font-proxima`}>
                #РазвитиеСпортивногоИнтертейнмента
              </span>
            </div>
          </li>
          <li className={styles.numItem}>
            <span className={styles.num}>3</span>
            <div className={styles.numContent}>
              <h3 className={classNames(styles.title, styles.blackTitle)}>
                Отправьте резюме
              </h3>
              <span className={`${styles.tag} font-proxima`}>
                #КаждыйЗолотойКусочек
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.finalContainer}>
        <h3 className={styles.title}>Мы ищем амбициозных и горящих людей</h3>
        <Image
          src={teamImage}
          width={150}
          height={120}
          alt="team"
          quality={100}
          className={styles.teamImage}
        />
      </div>
    </div>
  );
};
