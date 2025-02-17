import { NextLinePreposition } from '../../NextLinePreposition/NextLinePreposition';

export const Insights = () => {
  return (
    <div className='flex flex-col gap-[20px] tablet:gap-[40px] desktop:gap-[60px]'>
      <div className='desktop:px-[80px]'>
        <NextLinePreposition
          tag='h2'
          text='Мы – команда профессионалов, нацеленных на результат'
          className='font-unbound text-[24px] font-bold uppercase leading-[1.1] text-text-dark tablet:text-[50px] tablet:leading-[1.3] desktop:text-[55px] desktop:leading-[1.1] desktop-light:text-[60px] desktop-hard:text-[70px]'
        />
      </div>
    </div>
  );
};
