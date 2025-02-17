import Arrow from "@/public/assets/images/icons/link_arrow.svg";
import Link from "next/link";

interface Props {
  title: string;
  link: string;
  target?: string;
}

export const LinkArrow = ({ title, link, target = "_self" }: Props) => {
  return (
    <Link
      rel={target === "_blank" ? "noopener" : undefined}
      href={link}
      target={target}
      className="flex p-[15px] whitespace-nowrap items-center gap-[10px] rounded-[6px] leading-1 bg-main-orange text-text-dark font-proxima text-[20px] font-bold hover:bg-main-orange-hover"
    >
      {title}
      <Arrow className="h-[24px] w-[24px] fill-main-bg" />
    </Link>
  );
};
