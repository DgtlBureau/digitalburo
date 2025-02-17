import Link from "next/link";
import { Breadcrumb, Breadcrumbs } from "../../shared/Breadcrumbs/Breadcrumbs";

const BREADCRUMBS: Breadcrumb[] = [
  { title: "Main", link: "/" },
  { title: "Career" },
];

export const Hero = () => {
  return (
    <div
      className={`flex flex-col gap-[24px] p-[40px_20px] tablet:p-[40px] desktop:p-[40px_60px] bg-ligth-gray-bg break-words pb-[60px] desktop:gap-[20px]`}
    >
      <Breadcrumbs breadcrumbs={BREADCRUMBS} light />
      <h1 className="z-[5] font-unbound text-[40px] font-bold uppercase leading-[1.1] tablet:text-[44px] desktop:text-[70px]">
        Станьте частью команды
      </h1>
      <Link
        href="#form"
        className={`p-[14px_32px] text-[20px] leading-1 font-proxima font-bold w-fit bg-main-orange hover:bg-main-orange-hover desktop:p-[13px_27px] desktop:text-[36px] duration-300 rounded-[6px]`}
      >
        Отправить резюме
      </Link>
    </div>
  );
};
