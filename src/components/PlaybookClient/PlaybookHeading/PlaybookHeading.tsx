"use client";

import { underscopeReverter } from "@/src/utils/formatter/underscopeFormatter";
import { subCategoryRu, titleTranslate } from "@/src/utils/ruData/ruCategories";
import { usePathname, useSearchParams } from "next/navigation";

export const PlaybookHeading = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const subCategory = searchParams.get("sub-category");
  const tag = searchParams.get("tag");

  const pathnameArr = pathname.split("/").filter((item) => item !== "");
  const pathTitle = pathnameArr.length < 2 ? "all" : pathnameArr[1];
  const subCategoryTranslate =
    subCategoryRu[subCategory as keyof typeof subCategoryRu] ?? subCategory;

  return (
    <div>
      <h2 className="w-full text-center font-unbound text-[24px] uppercase leading-[1.16] tablet:text-[45px] tablet:leading-[1] laptop-big:text-start laptop-big:text-[45px]">
        {titleTranslate[pathTitle as keyof typeof titleTranslate] ?? pathTitle}{" "}
        <span className="text-[18px] leading-[1.3] text-main-orange tablet:text-[20px] tablet:leading-[1.2]">
          {subCategory && `/ ${underscopeReverter(subCategoryTranslate)}`}
        </span>{" "}
        <span className="text-[18px] leading-[1.3] text-main-orange tablet:text-[20px] tablet:leading-[1.2]">
          {tag && `/ ${underscopeReverter(tag)}`}
        </span>
      </h2>
    </div>
  );
};
