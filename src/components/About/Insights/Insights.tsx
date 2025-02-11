import { NextLinePreposition } from '../../NextLinePreposition/NextLinePreposition'

export const Insights = () => {
  return (
    <div className='flex flex-col gap-[20px] tablet:gap-[40px] desktop:gap-[60px]'>
      <div className='desktop:px-[80px]'>
        <h2 className='font-unbound text-[32px] text-text-dark font-bold uppercase leading-[1.1] tablet:text-[50px] tablet:leading-[1.3] desktop:text-[55px] desktop:leading-[1.1] desktop-light:text-[60px] desktop-hard:text-[70px]'>
          <NextLinePreposition
            tag='span'
            text='Мы – команда профессионалов, нацеленных на результат'
            className=''
          />
        </h2>
      </div>
      <div className='bg-main-bg p-[40px_20px] desktop:p-[60px_80px]'>
        <ul className='flex flex-col gap-[40px] text-white desktop:flex-row desktop:gap-[49px]'>
          <li className='flex flex-1 flex-col gap-[12px]'>
            <h3 className='whitespace-nowrap font-unbound text-[44px] font-bold uppercase leading-[1.1] tablet:text-[50px]'>
              2 года
            </h3>
            <p className='font-proxima text-[20px] leading-[1.2]'>
              создаем мобильные приложения и веб-сервисы для передовых компаний
            </p>
          </li>
          <li className='flex flex-1 flex-col gap-[12px]'>
            <h3 className='whitespace-nowrap font-unbound text-[44px] font-bold uppercase leading-[1.1] tablet:text-[50px]'>
              25+
            </h3>
            <p className='font-proxima text-[20px] leading-[1.2]'>
              реализованных цифровых проектов, которые привлекли новых
              пользователей
            </p>
          </li>
          <li className='flex flex-1 flex-col gap-[12px]'>
            <h3 className='whitespace-nowrap font-unbound text-[44px] font-bold uppercase leading-[1.1] tablet:text-[50px]'>
              20+ людей
            </h3>
            <p className='font-proxima text-[20px] leading-[1.2]'>
              работатют над заданиями
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
