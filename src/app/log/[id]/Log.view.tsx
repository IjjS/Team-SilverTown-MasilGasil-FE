"use client";

import * as S from "./Log.styles";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";

import { Button, Tab } from "@/components";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import useTheme from "@/lib/hooks/useTheme";
import { GeoPosition } from "@/types/OriginDataType";
import { MasilDetailResponse, UserInfoType } from "@/types/Response";

import { TAB_CONTENTS } from "./Log.constants";
import { TabType } from "./Log.types";
import { LogKebabMenu, LogMemo, LogPin } from "./components";
import { LogMapSection } from "./sections";

import Link from "next/link";

interface LogViewProps {
  masilData: MasilDetailResponse;
  logId: string;
  userInfo: UserInfoType;
  tabIndex: number;
  currentPinIndex: number;
  mapCenter: GeoPosition;
  setTabIndex: React.Dispatch<React.SetStateAction<TabType>>;
  handleCurrentPinIndex: (pinIndex: number) => void;
  handleClickCenter: () => void;
  handleClickTab: (index: number) => void;
}

const LogView = ({
  masilData,
  logId,
  userInfo,
  tabIndex,
  currentPinIndex,
  mapCenter,
  handleCurrentPinIndex,
  handleClickCenter,
  handleClickTab,
}: LogViewProps) => {
  const theme = useTheme();

  return (
    <>
      <TopNavigator
        leftChildren={<GoBackButton />}
        rightChildren={<LogKebabMenu />}
        containerStyle={{ backgroundColor: "transparent" }}
      />
      <S.LogContainer>
        <LogMapSection
          masilData={masilData}
          currentPinIndex={currentPinIndex}
          mapCenter={mapCenter}
          handlePinIndex={handleCurrentPinIndex}
          handleClickCenter={handleClickCenter}
        />
        <S.LogContentLayout>
          <Tab
            className="logTab"
            tabContents={TAB_CONTENTS}
            tabClickHandler={handleClickTab}
            focusedTab={tabIndex}
            layoutId="log-underline"
          />

          <S.LogContentSection
            className="scrollbar-hide"
            style={{
              overflowY: tabIndex === TabType.Pin ? "visible" : "auto",
            }}
          >
            {tabIndex === TabType.Memo && (
              <LogMemo
                masilData={masilData}
                userInfo={userInfo}
              />
            )}
            {tabIndex === TabType.Pin && (
              <LogPin
                pins={masilData.pins}
                currentPinIndex={currentPinIndex}
                handlePinIndex={handleCurrentPinIndex}
              />
            )}

            <Link href={`/post/create?logId=${logId}`}>
              <Button
                width="calc(100% - 4rem)"
                textColor={theme?.white}
                buttonColor={theme?.green_500}
                style={{
                  position: "fixed",
                  left: "50%",
                  bottom: "9rem",
                  transform: "translateX(-50%)",
                  fontSize: `${FONT_SIZE.LARGE}`,
                  fontWeight: `${FONT_WEIGHT.BOLD}`,
                }}
              >
                산책 공유하기
              </Button>
            </Link>
          </S.LogContentSection>
        </S.LogContentLayout>
      </S.LogContainer>
    </>
  );
};

export default LogView;
