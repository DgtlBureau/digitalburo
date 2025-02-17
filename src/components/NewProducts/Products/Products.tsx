import { IProduct } from "@/src/utils/types";
import { DateTime } from "luxon";
import Image from "next/image";
import { Breadcrumb, Breadcrumbs } from "../../shared/Breadcrumbs/Breadcrumbs";

const BREADCRUMBS: Breadcrumb[] = [
  { title: "Главная", link: "/" },
  { title: "Проекты" },
];

interface IProducts {
  products: IProduct[];
}

export const Products = ({ products }: IProducts) => {
  const sortedProducts = [...products].sort(
    (a, b) =>
      DateTime.fromFormat(b.date, "dd-MM-yyyy").toMillis() -
      DateTime.fromFormat(a.date, "dd-MM-yyyy").toMillis(),
  );

  return (
    <div className="flex flex-col gap-[40px] tablet:gap-[60px]">
      <div className="desktop:py-[65px]">
        <Breadcrumbs light breadcrumbs={BREADCRUMBS} />
        <h1 className="mt-[20px] font-unbound text-[28px] font-bold uppercase leading-[1.1] text-text-dark tablet:text-[50px] desktop:text-[70px]">
          Наши новые продукты
        </h1>
        <p className="mt-[21px] font-proxima text-[18px] font-bold leading-[1.25] text-light-gray tablet:mt-[24px] tablet:text-[20px] desktop:text-[27px] desktop:mt-[20px]">
          Мы разрабатываем собственные идеи и превращаем их в инструменты
        </p>
      </div>
      <div className="grid grid-cols-1 gap-[40px] tablet:grid-cols-2">
        {sortedProducts.map((item) => (
          <a
            key={item.name}
            href={item.open ? item.link : undefined}
            rel="noopener"
            target={item.open ? "_blank" : undefined}
            className={`relative overflow-hidden`}
          >
            <Image
              key={item.name}
              src={item.image}
              alt={item.name}
              quality={80}
              width={850}
              height={448}
              className={`h-[auto] w-full ${item.open ? "grayscale-0" : "blur-[5px] grayscale"}`}
            />
            {!item.open && (
              <span className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] font-unbound text-[32px] font-bold uppercase text-main-orange desktop:text-[46px]">
                Closed
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};
