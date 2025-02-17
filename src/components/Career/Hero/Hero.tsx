import Link from 'next/link';
import { Breadcrumb, Breadcrumbs } from '../../shared/Breadcrumbs/Breadcrumbs';

const BREADCRUMBS: Breadcrumb[] = [
  { title: 'Main', link: '/' },
  { title: 'Career' },
];

export const Hero = () => {
  return (
    <div
      className={`flex flex-col gap-[24px] break-words bg-ligth-gray-bg p-[40px_20px] pb-[60px] tablet:p-[40px] desktop:gap-[20px] desktop:p-[40px_60px]`}
    >
      <Breadcrumbs breadcrumbs={BREADCRUMBS} light />
      <h1 className='z-[5] font-unbound text-[40px] font-bold uppercase leading-[1.1] tablet:text-[44px] desktop:text-[70px]'>
        Станьте частью команды
      </h1>
      <Link
        href='#form'
        className={`leading-1 w-fit rounded-[6px] bg-main-orange p-[14px_32px] font-proxima text-[20px] font-bold duration-300 hover:bg-main-orange-hover desktop:p-[13px_27px] desktop:text-[36px]`}
      >
        Отправить резюме
      </Link>
    </div>
  );
};
