import { DropDownMenu } from "@/components";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

/**
 * **공통 DropDownMenu 컴포넌트**
 *
 * ### Props
 * - **isEdit : **boolean값을 통해 메뉴 리스트중 수정 버튼의 존재 여부를 전달받습니다.
 * - **onEdit : **수정 버튼 클릭시 수행될 메서드를 전달받습니다.
 * - **onDelete : **삭제 버튼 클릭시 수행될 메서드를 전달받습니다.
 */
const meta = {
  title: "Components/DropDownMenu",
  component: DropDownMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  args: {
    isEdit: true,
    onEdit: fn(),
    onDelete: fn(),
  },

  argTypes: {
    isEdit: {
      description: "boolean값을 통해 메뉴 리스트중 수정 버튼의 존재 여부를 전달받습니다.",
    },

    onEdit: {
      description: "수정 버튼 클릭시 수행될 메서드를 전달받습니다.",
    },

    onDelete: {
      description: "삭제 버튼 클릭시 수행될 메서드를 전달받습니다.",
    },
  },

  decorators: [
    (DropDownMenuComponent) => {
      return (
        <section className="w-[40rem] h-[20rem] flex justify-center">
          <DropDownMenuComponent />
        </section>
      );
    },
  ],
} satisfies Meta<typeof DropDownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const IsEdit_False: Story = {
  args: {
    isEdit: false,
  },
};
