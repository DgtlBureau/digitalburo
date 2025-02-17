import Arrow from '@/public/assets/images/icons/link_arrow.svg';
import Link from 'next/link';

interface Props {
  title: string;
  link: string;
  target?: string;
}

export const LinkArrow = ({ title, link, target = '_self' }: Props) => {
  return (
    <Link
      rel={target === '_blank' ? 'noopener' : undefined}
      href={link}
      target={target}
      className='leading-1 flex items-center gap-[10px] whitespace-nowrap rounded-[6px] bg-main-orange p-[15px] font-proxima text-[20px] font-bold text-text-dark hover:bg-main-orange-hover'
    >
      {title}
      <Arrow className='h-[24px] w-[24px] fill-main-bg' />
    </Link>
  );
};
