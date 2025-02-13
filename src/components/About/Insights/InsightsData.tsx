export const InsightsData = () => {
  return (
    <div className='bg-main-bg p-[40px_20px] desktop:p-[60px_80px]'>
      <ul className='flex flex-col gap-[40px] text-white desktop:flex-row desktop:gap-[49px]'>
        <li className='flex flex-1 flex-col gap-[12px]'>
          <h3 className='whitespace-nowrap font-unbound text-[28px] font-bold uppercase leading-[1.1] tablet:text-[44px] desktop:text-[48px]'>
            2 года
          </h3>
          <p className='font-proxima text-[20px] leading-[1.2] desktop:text-[16px]'>
            создаем мобильные приложения и веб-сервисы для передовых компаний
          </p>
        </li>
        <li className='flex flex-1 flex-col gap-[12px]'>
          <h3 className='whitespace-nowrap font-unbound text-[28px] font-bold uppercase leading-[1.1] tablet:text-[44px] desktop:text-[48px]'>
            25+
          </h3>
          <p className='font-proxima text-[20px] leading-[1.2] desktop:text-[16px]'>
            реализованных цифровых проектов, которые привлекли новых
            пользователей
          </p>
        </li>
        <li className='flex flex-1 flex-col gap-[12px]'>
          <h3 className='whitespace-nowrap font-unbound text-[28px] font-bold uppercase leading-[1.1] tablet:text-[44px] desktop:text-[48px]'>
            20+ людей
          </h3>
          <p className='font-proxima text-[20px] leading-[1.2] desktop:text-[16px]'>
            работатют над заданиями
          </p>
        </li>
      </ul>
    </div>
  )
}
