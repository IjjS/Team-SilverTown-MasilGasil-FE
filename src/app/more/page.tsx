import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import MoreListController from "./MoreList.controller";
import SortTab from "./SortTab/SortTab";
import { HEADER_TITLE } from "./MoreList.constants";
import { KeywordType } from "./MoreList.types";

interface MorePageProps {
  searchParams: { keyword: KeywordType; order: string };
}

const More = ({ searchParams }: MorePageProps) => {
  const { keyword, order } = searchParams;

  const tabVisible = keyword === "my_post" || keyword === "my_like";

  return (
    <>
      <TopNavigator
        leftChildren={<GoBackButton />}
        title={HEADER_TITLE[keyword]}
      />
      <div
        style={{ paddingTop: "6rem", paddingBottom: "10rem" }}
        className="w-full h-full"
      >
        {tabVisible && (
          <SortTab
            keyword={keyword}
            order={order}
          />
        )}
        <MoreListController
          keyword={keyword}
          order={order}
        />
      </div>
    </>
  );
};

export default More;
