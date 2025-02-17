import ValuesBody from '../../svg/TeamValuesBodySvg';
import { ValuesBodyTablet } from '../../svg/TeamValuesBodyTabletSvg';
import { ValueItemMobile } from './ValueItemMobile/ValueItemMobile';

const VALUES_ITEMS = [
  {
    title: 'Открытость',
    description:
      'Есть вопрос? Задавайте. Столкнулись с трудностями при работе над проектом? Сообщите нам об этом немедленно. Этот принцип лежит в основе наших бизнес-процессов: мы ценим открытость и прозрачность.',
  },
  {
    title: 'Свобода',
    description:
      'Идеальный член нашей команды высказывает свое мнение, делится идеями по проектам и ищет способы улучшить результаты работы. Мы поддерживаем свободу выбора, карьерные цели и новые инициативы.',
  },
  {
    title: 'Развитие',
    description:
      'Мы постоянно развиваемся и ценим стремление к профессиональному росту в нашей команде. Мы нацелены как на профессиональное, так и на личностное развитие. Мы участвуем в международных проектах и погружаемся в интересные задачи.',
  },
  {
    title: 'Адаптация',
    description:
      'Понимание ценностей и идей компании и каждого проекта - ключ к успешному решению задач, предотвращению стресса и поддержанию позитивной атмосферы в коллективе. В компании Zarubin&Co существует четко выстроенная система подготовки к работе.',
  },
  {
    title: 'Всегда на связи',
    description: 'Наше энергичное руководство - всего лишь звонок.',
  },
  {
    title: 'Забота',
    description:
      'Нам небезразлично, что происходит на проекте и с нашими клиентами. Мы всегда думаем о том, как сделать мир вокруг нас лучше. В The Bright Byte мы поощряем инициативу.',
  },
];
export const Values = () => {
  return (
    <div className='flex flex-col gap-[40px] tablet:gap-[98px]'>
      <h2 className='font-unbound text-[32px] font-bold uppercase leading-[1] tablet:text-[38px] tablet:leading-[1.3] desktop:text-[50px] desktop:leading-[1.1]'>
        Ценности, которые помогают добиваться результатов
      </h2>
      <div className='hidden h-auto desktop:block'>
        <ValuesBody />
      </div>
      <div className='hidden h-auto tablet:block desktop:hidden'>
        <ValuesBodyTablet />
      </div>
      <div className='flex h-auto flex-col gap-[40px] tablet:hidden desktop:hidden'>
        {VALUES_ITEMS.map((item, index) => (
          <ValueItemMobile
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
